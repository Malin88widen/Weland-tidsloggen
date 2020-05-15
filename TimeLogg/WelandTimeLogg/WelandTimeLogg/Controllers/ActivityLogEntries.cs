using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WelandTimeLogg.DataAccess;
using WelandTimeLogg.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace WelandTimeLogg.Controllers
{
    public class ActivityLogEntriesController : Controller
    {
        private readonly DefaultDataContext dataContext;

        public ActivityLogEntriesController(DefaultDataContext context)
        {
            dataContext = context;
        }

        [HttpGet("api/activityLogEntries")]
        public IActionResult GetActivityLogEntriesResults()
        {
            var activityLogEntries = dataContext.ActivityLogEntries
           .OrderByDescending(f => f.Name);

            if (activityLogEntries == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            return Ok(activityLogEntries);

        }



        //GET api/forms/5
        [HttpGet("api/activityLogEntries/{Id}")]
        public IActionResult GetGetActivityLogEntriesResultById(int id)
        {
            var activityLogEntries = dataContext.Forms.Where(f => f.Id == id);


            if (activityLogEntries == null)
            {
                return NotFound();
            }

            return Ok(activityLogEntries);
        }



        [HttpPost("api/activityLogEntries/post")]
        public ActionResult PostActivityLogEntries(ActivityLogEntries activityLogEntries)
        {
         

          

                var ActivityAnswer = new ActivityLogEntries
                {
                    Name = "Doh", /*Få denna dynamisk!!*/
                    CreatedDate = DateTime.Now,
                    Hours = 5,
                    ActivityLastedHours = 2,


                };

          

            

            dataContext.ActivityLogEntries.Add(ActivityAnswer);
            dataContext.SaveChanges();
            return CreatedAtAction("GetActivityLogEntriesResults", new { name = activityLogEntries.Name }, ActivityAnswer);
        }

    }

}


