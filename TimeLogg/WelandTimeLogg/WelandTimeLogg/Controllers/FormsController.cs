using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WelandTimeLogg.DataAccess;
using WelandTimeLogg.Models;

namespace WelandTimeLogg.Controllers
{
    [Route("/")]
    public class FormsController : Controller
    {

        private readonly DefaultDataContext dataContext;

        public FormsController(DefaultDataContext context)
        {
            dataContext = context;
        }

 

        [HttpGet("api/forms")]
        public List<Forms> GetAllActivities()
        {
            return dataContext.Forms.ToList();
        }


        [HttpGet("api/forms/{Id}")]
        public IActionResult GetActivity(int id)
        {
            var forms = dataContext.Forms.Where(f => f.Id == id).ToList();
            return Ok(forms);
        }
    }
}


