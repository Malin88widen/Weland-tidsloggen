using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WelandTimeLogg.Models;

namespace WelandTimeLogg.Controllers
{
        [Route("/")]
        public class FormsController : Controller
        {
            Forms[] forms = new Forms[]
            {
            new Forms { Id = 1, Name = "Malin" },
            new Forms { Id = 2, Name = "Nisse"},
            new Forms { Id = 3, Name = "Olov"}
            };

            [HttpGet("api/forms")]
            public List<Forms> GetAllActivities()
            {
                return forms.ToList();
            }


            [HttpGet("api/forms/{Id}")]
            public IActionResult GetActivity(int id)
            {
                var activity = forms.Where(f => f.Id == id).ToList();
                return Ok(forms);
            }
        }
    }

