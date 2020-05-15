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
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime CreatedDate { get; set; }

        public int ActivityLastedHours { get; set; }

        [Column(TypeName = "decimal(8,22)")] 
        [Required(ErrorMessage = "Du måste fylla i timmar i formatet x.xx")]
        public Decimal Hours { get; set; }

        public User User { get; set; }

        public Activities Activities { get; set; }
    }
}
