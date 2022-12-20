
namespace flirtify.Services
{
    public interface IAuthService
    {
        Task<ServiceResponse<ResponseRegisterUserDto>> Register(RegisterUserDto user);

        Task<ServiceResponse<string>> Login(LoginUserDto user);
    }
}
