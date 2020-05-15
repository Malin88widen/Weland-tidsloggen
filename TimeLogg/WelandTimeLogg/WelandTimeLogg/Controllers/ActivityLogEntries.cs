using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public IActionResult GetActivityLogEntries()
        {
            var activityLog = dataContext.ActivityLogEntries
            .OrderByDescending(a => a.Name);

       

            return Ok(activityLog);

        }


        //GET api/forms/5
        [HttpGet("api/activityLogEntries/{Id}")]
        public IActionResult GetActivityLogResultById(int id)
        {
            var activityLog = dataContext.ActivityLogEntries.Where(al => al.Id == id);

            if (activityLog == null)
            {
                return NotFound();
            }

            return Ok(activityLog);
        }



        //[HttpPost("api/activityLogEntries/post")]
        //public ActionResult PostActivityLogEntries(ActivityLogEntries activityLogEntries)
        //{

        //    var Answer = new ActivityLogEntries
        //    {
        //        CreatedDate = DateTime.Now,
        //        Hours = 2,
        //        Name = "Möte", /*Få denna dynamisk!!*/

        //    };

        //    dataContext.ActivityLogEntries.Add(Answer);
        //    dataContext.SaveChanges();
        //    return CreatedAtAction("GetActivityLogEntries", new { name = activityLogEntries.Name }, Answer);
        //}


        [HttpPost("api/activityLogEntries/post")]
        public ActionResult PostActivityLogEntries(ActivityLogEntries activityLogEntries)
        {

            var Answer = new ActivityLogEntries
            {
                Name = "Möte" /*Få denna dynamisk!!*/

            };

            dataContext.ActivityLogEntries.Add(Answer);
             dataContext.SaveChanges();
            return CreatedAtAction("GetActivityLogEntries", new { name = activityLogEntries.Name }, Answer);
        }

    }
}



//namespace WelandTimeLogg.Controllers
//{
//    [Route("api/[controller]")]
//    public class ActivityLogEntries : Controller
//    {
//        // GET: api/<controller>
//        [HttpGet]
//        public IEnumerable<string> Get()
//        {
//            return new string[] { "value1", "value2" };
//        }

//        // GET api/<controller>/5
//        [HttpGet("{id}")]
//        public string Get(int Id)
//        {
//            return "value";
//        }

//        // POST api/<controller>
//        [HttpPost]
//        public void Post([FromBody]string value)
//        {
//        }

//        // PUT api/<controller>/5
//        [HttpPut("{id}")]
//        public void Put(int id, [FromBody]string value)
//        {
//        }

//        // DELETE api/<controller>/5
//        [HttpDelete("{id}")]
//        public void Delete(int id)
//        {
//        }
//    }
//}
