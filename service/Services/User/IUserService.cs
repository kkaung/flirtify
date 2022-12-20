namespace flirtify.Services
{
    public interface IUserService
    {
        Task<ServiceResponse<List<GetUserDto>>> GetUsers();
        Task<ServiceResponse<GetUserDto>> GetUser(int id);
        Task<ServiceResponse<GetUserDto>> DeleteUser(int id);
        Task<ServiceResponse<User>> UpdateUser(int id);
    }
}
