namespace flirtify.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<RegisterUserDto, User>();
            CreateMap<User, ResponseRegisterUserDto>();
            CreateMap<User, GetUserDto>();
        }
    }
}
