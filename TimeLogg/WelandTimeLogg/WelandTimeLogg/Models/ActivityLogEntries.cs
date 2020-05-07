using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WelandTimeLogg.Models
{
    public class ActivityLogEntries
    {
        public int Id { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime Hours { get; set; }

        public User User { get; set; }

        public Activity Activities { get; set; }
    }
}
