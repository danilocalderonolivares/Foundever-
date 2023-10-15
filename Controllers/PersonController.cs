using ASP.NETCoreWebApplication1.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NETCoreWebApplication1.Controllers;

[ApiController]
[Route("[controller]")]
public class PersonController : Controller
{
    [HttpGet]
    public IEnumerable<Person> Get()
    {
        var person = new Person();
        var personList =  person.GetPersons();
        return personList.Where(person => person.Age >= 18 && person.DriverLincese);
    }

}