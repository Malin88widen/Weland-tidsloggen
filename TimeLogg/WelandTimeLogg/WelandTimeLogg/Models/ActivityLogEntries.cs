using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WelandTimeLogg.Models
{
    public class ActivityLogEntries
    {
        [Key]
        public int id { get; set; }

        public string name { get; set; }

        public DateTime createdDate { get; set; }

        public int activityLastedHours { get; set; }

        [Column(TypeName = "decimal(8,2)")]
        public decimal hours { get; set; }


        public User user { get; set; }

        public Activities activities { get; set; }
    }
}
