using Microsoft.EntityFrameworkCore;
using WelandTimeLogg.Models;

namespace WelandTimeLogg.DataAccess
{
    public class DefaultDataContext : DbContext
    {
        public DefaultDataContext(DbContextOptions<DefaultDataContext> options) : base(options)
        { }

        public DbSet<Activities> Activities { get; set; }
        public DbSet<Department> Department { get; set; }

        public DbSet<ActivityLogEntries> ActivityLogEntries { get; set; }

        public DbSet<User> User { get; set; }

        public DbSet<Forms> Forms { get; set; }

    }
}
