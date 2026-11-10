using System.Collections.Concurrent;
using System.Threading;
using AllergyApp.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace AllergyApp.Api.Controllers;

[ApiController]
[Route("api/meals")]
public class MealsController : ControllerBase
{
    private static readonly ConcurrentDictionary<int, Meal> Meals = new()
    {
        [1] = new Meal(
            1,
            "Chicken and rice",
            new DateTimeOffset(2026, 11, 9, 12, 30, 0, TimeSpan.FromHours(-6)))
    };

    private static int _lastId = 1;

    [HttpGet]
    public IActionResult List() => Ok(Meals.Values.OrderBy(meal => meal.Id).ToArray());

    [HttpGet("{id:int}")]
    public IActionResult Get(int id)
    {
        return Meals.TryGetValue(id, out var meal) ? Ok(meal) : NotFound();
    }

    [HttpPost]
    public IActionResult Create([FromBody] CreateMealRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Name) || request.EatenAt is null)
        {
            return BadRequest("Name and EatenAt are required.");
        }

        var id = Interlocked.Increment(ref _lastId);
        var meal = new Meal(id, request.Name.Trim(), request.EatenAt.Value);
        Meals[id] = meal;

        return CreatedAtAction(nameof(Get), new { id }, meal);
    }
}