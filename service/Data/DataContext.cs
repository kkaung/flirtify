using System.Text.Json;

namespace flirtify.Data
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public string DbPath { get; }

        public DataContext()
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = System.IO.Path.Join(path, "flirtify1.db");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options) =>
            options.UseSqlite($"Data Source={DbPath}");

        // Seed
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var currentPath = Directory.GetCurrentDirectory();
            var UserSeedPath = System.IO.Path.Join(currentPath, "/Data/UserSeed.json");
            string jsonString = File.ReadAllText(UserSeedPath);
            List<User>? users = JsonSerializer.Deserialize<List<User>>(jsonString);

            modelBuilder.Entity<User>().HasData(users);
        }
    }
}
