using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WelandTimeLogg.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace WelandTimeLogg.Controllers
{
    [Route("/")]
    public class ActivityLogEntriesController : Controller
    {
        ActivityLogEntries[] activityLogEntries = new ActivityLogEntries[]
        {
            new ActivityLogEntries { Id = 1, Name = "Ettan" },
            new ActivityLogEntries { Id = 2, Name = "Tvåan"},
            new ActivityLogEntries { Id = 3, Name = "Trean"}
        };

        [HttpGet("api/activityLogEntries")]
        public List<ActivityLogEntries> GetAllActivities()
        {
            return activityLogEntries.ToList();
        }


        [HttpGet("api/activityLogEntries/{Id}")]
        public IActionResult GetActivity(int id)
        {
            var activityLogEntry = activityLogEntries.Where(al => al.Id == id).ToList();
            return Ok(activityLogEntries);
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
