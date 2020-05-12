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
    [Route("/")]
    public class ActivityController : Controller
    {

        private readonly DefaultDataContext dataContext;

        public ActivityController(DefaultDataContext context)
        {
            dataContext = context;
        }

        //Activity[] activities = new Activity[]
        //{
        //    new Activity { Id = 1, Name = "Support" },
        //    new Activity { Id = 2, Name = "Möte"},
        //    new Activity { Id = 3, Name = "Dokumentation"}
        //};

        [HttpGet("api/activities")]
        public List<Activity> GetAllActivities()
        {
            return dataContext.Activity.ToList();
        }


        [HttpGet("api/activities/{Id}")]
        public IActionResult GetActivity(int id)
        {
            var activity = dataContext.Activity.Where(a => a.Id == id).ToList();
            return Ok(activity);
        }
    }
}



        // GET: api/<controller>
    //    [HttpGet]
    //    public IEnumerable<string> Get()
    //    {
    //        return new string[] { "value1", "value2" };
    //    }

    //    // GET api/<controller>/5
    //    [HttpGet("{id}")]
    //    public string Get(int id)
    //    {
    //        return "value";
    //    }

    //    // POST api/<controller>
    //    [HttpPost]
    //    public void Post([FromBody]string value)
    //    {
    //    }

    //    // PUT api/<controller>/5
    //    [HttpPut("{id}")]
    //    public void Put(int id, [FromBody]string value)
    //    {
    //    }

    //    // DELETE api/<controller>/5
    //    [HttpDelete("{id}")]
    //    public void Delete(int id)
    //    {
    //    }
    //}
//}
