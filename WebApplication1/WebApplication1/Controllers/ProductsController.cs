using Microsoft.AspNetCore.Mvc;
using Task.Data;
using Task.Models;

namespace Task.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly TaskDbContext _taskDbContext;
        public ProductsController(TaskDbContext taskDbContext)
        {
            _taskDbContext = taskDbContext;
        }
        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var product = _taskDbContext.Product.ToList();
            return Ok(product);
        }

        [HttpPost]
        public IActionResult AddProduct([FromBody] Product _product)
        {
            _taskDbContext.Product.Add(_product);
            _taskDbContext.SaveChanges();
            return Ok(_product);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetById([FromRoute]int id)
        {
            var _product = _taskDbContext.Product.FirstOrDefault(x => x.Id == id);
            if(_product == null )
            {
                return NotFound();
            }
            return Ok(_product);
        }

        [HttpGet("category/{categoryId:int}")]
        public IActionResult GetProductsByCategory(int categoryId)
        {
            var products = _taskDbContext.Product.Where(p => p.category_id == categoryId).ToList();
            return Ok(products);
        }


        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateProduct([FromRoute] int id,Product _product)
        {
            var prod = _taskDbContext.Product.Find(id);
            if(prod == null )
            {
                return NotFound();
            }
            prod.Name= _product.Name;
            prod.Description= _product.Description;
            prod.Price= _product.Price;
            _taskDbContext.SaveChanges();
            return Ok(prod);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteProduct([FromRoute]int id)
        {
            var prod = _taskDbContext.Product.Find(id);
            if (prod == null)
            {
                return NotFound();
            }
            _taskDbContext.Product.Remove(prod);
            _taskDbContext.SaveChanges();
            return Ok(prod);

        }

        





    }
}
