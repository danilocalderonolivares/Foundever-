namespace ASP.NETCoreWebApplication1.Models;

public class Person
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }
    public string Country { get; set; }
    public bool DriverLincese { get; set; }
    
    public List<Person> GetPersons()
    {
        List<Person> persons = new List<Person>()
        {
            new Person
            {
                Id = 1,
                FirstName = "Michael",
                LastName = "Pitt",
                Age = 32,
                Country = "Germany",
                DriverLincese = true
            },
            new Person
            {
                Id = 2,
                FirstName = "Sabrina",
                LastName = "Morales",
                Age = 6,
                Country = "Ecuador",
                DriverLincese = false
            },
            new Person
            {
                Id = 3,
                FirstName = "Rodrigo",
                LastName = "Vela",
                Age = 54,
                Country = "Peru",
                DriverLincese = true
            },
            new Person
            {
                Id = 4,
                FirstName = "Lorena",
                LastName = "Perez",
                Age = 18,
                Country = "Bolivia",
                DriverLincese = false
            },
            new Person
            {
                Id = 5,
                FirstName = "Pablo",
                LastName = "Picasso",
                Age = 19,
                Country = "Spain",
                DriverLincese = true
            },
            new Person
            {
                Id = 6,
                FirstName = "Walter",
                LastName = "Misagi",
                Age = 17,
                Country = "Japan",
                DriverLincese = false
            },
        };
        return persons;
    }

}