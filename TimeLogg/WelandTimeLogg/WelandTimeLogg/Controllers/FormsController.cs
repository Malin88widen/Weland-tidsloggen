using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WelandTimeLogg.DataAccess;
using WelandTimeLogg.Models;

namespace WelandTimeLogg.Controllers
{

    public class FormsController : Controller
    {

        private readonly DefaultDataContext dataContext;

        public FormsController(DefaultDataContext context)
        {
            dataContext = context;
        }



        [HttpGet("api/forms")]
        public IActionResult GetFormResults()
        {
            var forms = dataContext.Forms
            .OrderByDescending(f => f.Name);

            if (forms == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            return Ok(forms);

        }



        //GET api/forms/5
        [HttpGet("api/forms/{Id}")]
        public IActionResult GetFormResultById(int id)
        {
            var form = dataContext.Forms.Where(f => f.Id == id);


            if (form == null)
            {
                return NotFound();
            }

            return Ok(form);
        }



        [HttpPost("api/forms/post")]
        public ActionResult PostForms(Forms forms)
        {

            var FormActivityAnswer = new Forms
            {
                Name = "Doh" /*Få denna dynamisk!!*/

            };

            dataContext.Forms.Add(FormActivityAnswer);
            dataContext.SaveChanges();
            return CreatedAtAction("GetFormResults", new { name = forms.Name }, FormActivityAnswer);

            
        }
    }
}

















//        //[HttpGet("Index")]
//        //public IActionResult Index(int id)
//        //{
//        //    var forms = dataContext.Forms.Where(f => f.Id == id);
//        //    return Ok(forms);
//        //}

//        //[HttpGet("api/forms")]
//        //public List<Forms> GetAllForms()
//        //{
//        //    return dataContext.Forms.ToList();
//        //}

//        //[HttpGet("api/forms/details")]
//        //public IActionResult Details(int id)
//        //{
//        //    var form = dataContext.Forms.Find(id);
//        //    if (form == null) return NotFound();
//        //    return View("Forms");

//        //} Onödig? Får ut på id genom "api/forms/{id}"

//        //[HttpGet("api/forms/{Id}")]
//        //public IActionResult GetForms(int id)
//        //{
//        //    var forms = dataContext.Forms.Where(f => f.Id == id).ToList();
//        //    return Ok(forms);
//        //}

//        //[HttpPost("api/forms/post")]
//        //public ActionResult PostForms(Forms forms)
//        //{
//        //    dataContext.Forms.Add(forms);
//        //    dataContext.SaveChanges();
//        //    return RedirectToAction("Index");
//        //}


//    }
//}

