using System.Numerics;

namespace Task.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public int category_id { get; set; }
    }
}
