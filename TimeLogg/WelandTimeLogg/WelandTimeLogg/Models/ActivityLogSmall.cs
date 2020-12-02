using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WelandTimeLogg.Models
{
    public class ActivityLogSmall
    {
        [Required(ErrorMessage = "Ange antal timmar")]
        public string hour { get; set; }

        [Required(ErrorMessage = "Du måste ange en titel")]
        public string name { get; set; }

        

        public string selectListName { get; set; }

        //public string selectListTwo { get; set; }

        public string description { get; set; }

        public string project { get; set; }

        //public List <SelectListItem> SelectListActivities  { get; set; }

    }
}
