using System;
using System.Collections.Generic;

namespace WebApplication1.Entities;

public partial class ProductParameter
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Value { get; set; }

    public int? ProductId { get; set; }

    public virtual Product? Product { get; set; }
}
