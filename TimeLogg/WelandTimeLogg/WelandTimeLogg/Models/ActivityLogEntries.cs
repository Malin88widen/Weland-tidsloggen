using Castle.MicroKernel.SubSystems.Conversion;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WelandTimeLogg.Models
{
    public class ActivityLogEntries
    {
        [Key]
        public int id { get; set; }

        public string name { get; set; }

        public DateTime createdDate { get; set; }

        public int activityLastedHours { get; set; }

        [Column(TypeName = "decimal(8)")]
        //[Required(ErrorMessage = "Du måste fylla i timmar i formatet x.xx")]
        public Decimal hours { get; set; }

        public User user { get; set; }

        public Activities activities { get; set; }
    }
}
