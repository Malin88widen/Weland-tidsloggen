﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.OData.Edm;
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

        public IActionResult List(int id = 0)
        {
            return View();
        }

        [HttpGet("api/activityLogEntries")]
        public IActionResult GetActivityLogEntriesResults()
        {
            var activityLogEntries = dataContext.ActivityLogEntries
           .OrderByDescending(f => f.createdDate);

            if (activityLogEntries == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            return Ok(activityLogEntries);

        }


        [HttpGet("api/activityLogEntriesFrontPage")] ////FrontPage här!
        public IActionResult GetActivityLogEntriesResultsFrontPage()
        {
            var activityLogEntries = dataContext.ActivityLogEntries
           .OrderByDescending(f => f.createdDate).Take(3); //Take(2) visar 2 st, Take(Today)??

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
            ActivityLogEntries activityLogEntries = dataContext.ActivityLogEntries.FirstOrDefault(f => f.id == id);



            if (activityLogEntries == null)
            {
                return NotFound();
            }

            return Ok(activityLogEntries);
        }


        [Consumes ("application/json")]
        [HttpPost("api/activityLogEntries/post")]
        public ActionResult PostActivityLogEntries([FromBody]ActivityLogSmall input )
        {

            ActivityLogEntries activityLogDto;

            try
            {
                activityLogDto = new ActivityLogEntries
                {
                    createdDate = DateTime.Now,
                    hours = decimal.Parse(input.hour.Replace(".","," )),
                    name = input.name,
                    description = input.description,
                    project = input.project
                };
            }
            catch (Exception)
            {
                return BadRequest("{\"messege\":\"Hours value not valid\"}");
            }
            //dataContext.ActivityLogEntries.Add(ActivityAnswer);
            //dataContext.SaveChanges();
            //return CreatedAtAction("GetActivityLogEntriesResults", ActivityAnswer);

            dataContext.ActivityLogEntries.Add(activityLogDto);
            dataContext.SaveChanges();
            return CreatedAtAction("GetActivityLogEntriesResults", activityLogDto);
        }

    }

}   


