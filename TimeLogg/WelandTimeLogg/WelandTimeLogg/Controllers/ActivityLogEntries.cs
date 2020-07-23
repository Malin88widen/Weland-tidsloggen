using System;
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
        public IActionResult GetActivityLogEntriesResultsFrontPage(string x, int id)
        {
            var activityLogEntries = dataContext.ActivityLogEntries
           .OrderByDescending(f => f.createdDate); //.Take(2) visar 2 st, Take(Today)??



            if (activityLogEntries == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            return Ok(activityLogEntries);

        }

        //SELECTLISTTEST
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //[HttpGet("api/activityLogEntriesSelectList")] ////SelectList här!
        //public IActionResult GetActivityLogEntriesSelectList(int id)
        //{

        //    var selectActivityList = new ActivityLogSmall
        //    {

        //        SelectActivity = dataContext.ActivityLogEntries().Select(
        //        x => new Microsoft.AspNetCore.Mvc.Rendering.SelectListItem
        //        {
                    
        //            selectListName = input.selectListName,
        //            name = input.name,
        //            createdDate = DateTime.Now,
        //            hours = decimal.Parse(input.hour.Replace(".", ",")),
        //            description = input.description,
        //            project = input.project

        //            Text = x.Name,
        //            Value = x.Id.ToString()
        //        }).ToList()
        //    };

        //    return CreatedAtAction("GetActivityLogEntriesResults", selectActivityList);
        //}


        //[HttpPost]
        //[Route("Underkategorier/Läggatill")]
        //public IActionResult AddSubActivity(SubCategoryViewModel s)
        //{
        //    if (ModelState.IsValid)
        //    {


        //        var subCat = new SubCategory
        //        {
        //            Name = s.Name,
        //            CategoryId = s.SelectedCategoryId
        //        };


        //        repo.AddSubCategory(subCat);

        //        return RedirectToAction(nameof(Index), new { categoryId = s.SelectedCategoryId });
        //    }

            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //GET api/forms/5
            [HttpGet("api/activityLogEntries/{Id}")]
        public IActionResult GetActivityLogEntriesResultById(int id)
        {
            ActivityLogEntries activityLogEntries = dataContext.ActivityLogEntries.FirstOrDefault(f => f.id == id);



            if (activityLogEntries == null)
            {
                return NotFound();
            }

            return Ok(activityLogEntries);
        }


        [Consumes("application/json")]
        [HttpPost("api/activityLogEntries/post")]
        public ActionResult PostActivityLogEntries([FromBody] ActivityLogSmall input)
        {
            //if (ModelState.IsValid)
            //{
                ActivityLogEntries activityLogDto;
                try
                {
                    activityLogDto = new ActivityLogEntries
                    {
                   
                       //selectListTwo = input.selectListTwo,
                        selectListName = input.selectListName,
                        name = input.name,
                        createdDate = DateTime.Now,
                        hours = decimal.Parse(input.hour.Replace(".", ",")),
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
            //}
            //else
            //{
            //    return View();
            //}
           
        
        }


        [HttpDelete("api/activityLogEntries/delete")]
        public void DeleteActivityLogById(int id)
        {
            var dataContextActivity = dataContext.ActivityLogEntries.FirstOrDefault(x => x.id.Equals(id));

            dataContext.Remove(dataContextActivity);
            dataContext.SaveChanges();
        }

    }

}


