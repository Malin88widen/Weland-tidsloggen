using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

//namespace WelandTimeLogg.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class HistoryController : Controllers
//    {
//        //All historik i en lista
//        List<History> history = new List<History>();
        
//    }

//    //Hämtar all historik från en lista
//    [HttpGet]
//    public IActionResult GetAllHistory()
//    {
        
//        return Ok(history);
//    }

//    //Hämtar särskild historik genom id:t
//    [HttpGet("{id}")]
//    public IActionResult GetHistory(int Id)
//    {

//        var result = history.FirstOrDefault(h => h.Id == id);

//        return Ok(result);
//    }

//    //SaveHistory generar ett nytt id för en händelse och lägger sedan till den i listan
//    //CreatedAtAction - returnerar en ny url till den nya skapade resursen då HttpPost har körts
//    [HttpPost]
//    public IActionResult SaveHistory(History history)
//    {
//        var newId = history.Count() + 1;

//        history.Id = newId;
//        history.Add(history);

//        return CreatedAtAction("GetHistory", new { id = history.id }, history);
//    }

//    //Vi uppdaterar en befintlig entitet
//    [HttpPut]
//    public IActionResult UpdateHistory(History history)
//    {
//        var savedHistory = history.FirstOrDefault(h => h.Id == history.Id);


//        savedHistory.Activity = history.Activity;
//        savedHistory.Date = history.Date;

//        return NoContent();
//    }

//    //baserat på ett id letas entiteten upp i listan och plockas bort
//    [HttpDelete("{id}")]
//    public IActionResult DeleteHistory(int id)
//    {
//        var savedHistory = history.FirstOrDefault(h => h.Id == id);

//        history.Remove(savedHistory);
//        return Ok(savedHistory);
//    }

//}
