using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WelandTimeLogg.Models
{
    public class ActivityLogSmall
    {
        public int id { get; set; }
        public string hour { get; set; }
        
        public string name { get; set; }

        public DateTime createdNow { get; set; }
    }
}
