using Microsoft.AspNetCore.Mvc;
using Task.Data;
using Task.Models;

namespace Task.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductParameterController : Controller
    {
        private readonly TaskDbContext _taskDbContext;

        public ProductParameterController(TaskDbContext taskDbContext)
        {
            _taskDbContext = taskDbContext;
        }

        [HttpGet]
        public IActionResult GetAllProductParameters()
        {
            var productParameters = _taskDbContext.ProductParameter.ToList();
            return Ok(productParameters);
        }

        [HttpPost]
        public IActionResult AddProductParameter([FromBody] ProductParameter productParameter)
        {
            _taskDbContext.ProductParameter.Add(productParameter);
            _taskDbContext.SaveChanges();
            return Ok(productParameter);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetProductParameterById([FromRoute] int id)
        {
            var productParameter = _taskDbContext.ProductParameter.FirstOrDefault(x => x.Id == id);
            if (productParameter == null)
            {
                return NotFound();
            }
            return Ok(productParameter);
        }

        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateProductParameter([FromRoute] int id, [FromBody] ProductParameter productParameter)
        {
            var existingProductParameter = _taskDbContext.ProductParameter.Find(id);
            if (existingProductParameter == null)
            {
                return NotFound();
            }

            existingProductParameter.Name = productParameter.Name;
            existingProductParameter.value = productParameter.value;
            _taskDbContext.SaveChanges();
            return Ok(existingProductParameter);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteProductParameter([FromRoute] int id)
        {
            var productParameter = _taskDbContext.ProductParameter.Find(id);
            if (productParameter == null)
            {
                return NotFound();
            }

            _taskDbContext.ProductParameter.Remove(productParameter);
            _taskDbContext.SaveChanges();
            return Ok(productParameter);
        }

        [HttpGet]
        [Route("product/{productId:int}")]
        public IActionResult GetProductParametersByProductId([FromRoute] int productId)
        {
            var productParameters = _taskDbContext.ProductParameter.Where(x => x.Product_id == productId).ToList();
            if (productParameters == null || productParameters.Count == 0)
            {
                return NotFound();
            }
            return Ok(productParameters);
        }

    }
}
