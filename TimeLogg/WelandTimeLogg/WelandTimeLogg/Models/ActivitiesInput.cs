using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WelandTimeLogg.Models
{
    public class ActivitiesInput
    {
        public int Id { get; set; }

        public string Activity { get; set; }

        public DateTime Date { get; set; }

        public bool Active { get; set; }


    }
}
