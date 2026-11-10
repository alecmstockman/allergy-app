namespace AllergyApp.Api.Models;

public record CreateMealRequest(string? Name, DateTimeOffset? EatenAt);