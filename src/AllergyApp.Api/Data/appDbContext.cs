using AllergyApp.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace AllergyApp.Api.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options)
    : DbContext(options)
{
    public DbSet<Meal> Meals => Set<Meal>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Meal>(entity =>
        {
            entity.HasKey(meal => meal.Id);

            entity.Property(meal => meal.Id)
                .ValueGeneratedOnAdd();

            entity.Property(meal => meal.Name)
                .HasMaxLength(200)
                .IsRequired();

            entity.Property(meal => meal.EatenAt)
                .IsRequired();
        });
    }
}