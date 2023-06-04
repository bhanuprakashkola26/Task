using System;
using System.Collections.Generic;

namespace WebApplication1.Entities;

public partial class Product
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public decimal? Price { get; set; }

    public int? CategoryId { get; set; }

    public virtual Category? Category { get; set; }

    public virtual ICollection<ProductParameter> ProductParameters { get; set; } = new List<ProductParameter>();
}
