
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WelandTimeLogg.Models
{
    public class ActivityLogEntries
    {


        [Key]
        public int id { get; set; }

        public string name { get; set; }

        public string selectListName { get; set; }

        //public string selectListTwo { get; set; }

        

        public string description { get; set;}

        public string project { get; set; }
    
        public DateTime createdDate { get; set; }

        public int activityLastedHours { get; set; }

        //public List<SelectListItem> ActivitySelectEntries { get; set; }


        [Column(TypeName = "decimal(8,2)")]
        public decimal hours { get; set; }

        //public List<ActivityLogEntries> activityLogEntriesForSelectList { get; set; }

        public User user { get; set; }

        public Activities activities { get; set; }

    
    }
}
