using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WelandTimeLogg.Models
{
    public class ActivityHistory
    {
        public int Id { get; set; }

        public DateTime PublishedDate { get; set; }

        public User User { get; set; }

        public Activity Activity { get; set; }
    }
}
