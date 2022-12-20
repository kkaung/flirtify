using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace flirtify.Services
{
    public class AuthService : IAuthService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;

        public AuthService(DataContext context, IMapper mapper, IConfiguration configuration)
        {
            _context = context;
            _mapper = mapper;
            _configuration = configuration;
        }

        public async Task<ServiceResponse<ResponseRegisterUserDto>> Register(RegisterUserDto user)
        {
            var response = new ServiceResponse<ResponseRegisterUserDto>();

            // Check if user already registered
            if (await UserExists(user.Email))
            {
                response.Success = false;
                response.Message = "User already registered";
                return response;
            }

            HashPassword(user.Password, out byte[] passwordSalt, out byte[] passwordHash);

            var newUser = _mapper.Map<User>(user);

            newUser.PasswordHash = passwordHash;
            newUser.PasswordSalt = passwordSalt;

            _context.Users.Add(newUser);

            await _context.SaveChangesAsync();

            response.Data = _mapper.Map<ResponseRegisterUserDto>(newUser);

            return response;
        }

        public async Task<ServiceResponse<string>> Login(LoginUserDto body)
        {
            var response = new ServiceResponse<string>();

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email.Equals(body.Email));

            if (user is null)
            {
                response.Message = "Invalid credentials";
                response.Success = false;
            }
            else if (!ValidatePassword(body.Password, user.PasswordSalt, user.PasswordHash))
            {
                response.Message = "Invalid credentials";
                response.Success = false;
            }
            else
            {
                response.Data = CreateToken(user);
            }

            return response;
        }

        private async Task<bool> UserExists(string email)
        {
            if (await _context.Users.AnyAsync(u => u.Email == email))
                return true;

            return false;
        }

        private void HashPassword(string password, out byte[] passwordSalt, out byte[] passwordHash)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }

        private bool ValidatePassword(string password, byte[] passwordSalt, byte[] passwordHash)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                Console.WriteLine(computedHash.SequenceEqual(passwordHash));
                return computedHash.SequenceEqual(passwordHash);
            }
        }

        private string CreateToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username)
            };

            var appSettingToken = _configuration.GetSection("AppSettings:Token").Value;

            if (appSettingToken is null)
                throw new Exception("Appsetting Token is null");

            SymmetricSecurityKey key = new SymmetricSecurityKey(
                System.Text.Encoding.UTF8.GetBytes(appSettingToken)
            );

            SigningCredentials creds = new SigningCredentials(
                key,
                SecurityAlgorithms.HmacSha512Signature
            );

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
