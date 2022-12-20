namespace flirtify.Dtos
{
    public class RegisterUserDto
    {
        public string Username { get; set; } = String.Empty;
        public string Email { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;
        public string Gender { get; set; } = String.Empty;

        public DateTime DateOfBirth { get; set; }
        public string City { get; set; } = String.Empty;
        public string Country { get; set; } = String.Empty;
    }
}
