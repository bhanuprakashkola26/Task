using Microsoft.EntityFrameworkCore;
using Task.Models;

namespace Task.Data
{
    public class TaskDbContext : DbContext 
    {
        public TaskDbContext(DbContextOptions options) : base(options) 
        {

        }

        public DbSet<Product> Product { get; set; }

        public DbSet<Category> Category { get; set; }
        public DbSet<ProductParameter> ProductParameter { get; set; }

    }
}
