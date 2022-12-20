namespace flirtify.Services
{
    public class UserService : IUserService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public UserService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<List<GetUserDto>>> GetUsers()
        {
            var response = new ServiceResponse<List<GetUserDto>>();

            var users = await _context.Users.Select(u => _mapper.Map<GetUserDto>(u)).ToListAsync();

            response.Data = users;

            return response;
        }

        public async Task<ServiceResponse<GetUserDto>> GetUser(int id)
        {
            var response = new ServiceResponse<GetUserDto>();

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);

            if (user is null)
            {
                response.Message = "User not found";
                response.Success = false;
                return response;
            }

            response.Data = _mapper.Map<GetUserDto>(user);

            return response;
        }

        public async Task<ServiceResponse<GetUserDto>> DeleteUser(int id)
        {
            var response = new ServiceResponse<GetUserDto>();

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);

            if (user is null)
            {
                response.Message = "User not found";
                response.Success = false;
                return response;
            }

            _context.Users.Remove(user);

            await _context.SaveChangesAsync();

            response.Data = _mapper.Map<GetUserDto>(user);

            return response;
        }

        public async Task<ServiceResponse<User>> UpdateUser(int id)
        {
            var response = new ServiceResponse<User>();

            return response;
        }
    }
}
