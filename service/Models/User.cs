namespace flirtify.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = String.Empty;
        public string Email { get; set; } = String.Empty;
        public byte[] PasswordSalt { get; set; } = new byte[0];
        public byte[] PasswordHash { get; set; } = new byte[0];
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; } = String.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;
        public string Geneder { get; set; } = string.Empty;
        public string Introduction { get; set; } = string.Empty;
        public string LookingFor { get; set; } = string.Empty;
        public string Interests { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
    }
}
