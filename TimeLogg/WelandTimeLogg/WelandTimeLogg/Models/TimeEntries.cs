using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WelandTimeLogg.Models
{
    public class TimeEntries
    {
        public int Id { get; set; }

        public DateTime Time { get; set; }

        public User User { get; set; }

        public Activity Activity { get; set; }
    }
}
