using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WelandTimeLogg.Models;

namespace WelandTimeLogg.DataAccess
{
    public class DefaultDataContext : DbContext
    {
        public DefaultDataContext(DbContextOptions<DefaultDataContext> options) : base (options)
        { }

        public DbSet<Activity> Activity { get; set; }
    }
}
