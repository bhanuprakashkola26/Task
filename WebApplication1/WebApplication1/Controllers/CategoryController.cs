using Microsoft.AspNetCore.Mvc;
using Task.Data;
using Task.Models;

namespace Task.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private readonly TaskDbContext _taskDbContext;

        public CategoryController(TaskDbContext taskDbContext)
        {
            _taskDbContext = taskDbContext;
        }

        [HttpGet]
        public IActionResult GetAllCategories()
        {
            var categories = _taskDbContext.Category.ToList();
            return Ok(categories);
        }

        [HttpPost]
        public IActionResult AddCategory([FromBody] Category category)
        {
            _taskDbContext.Category.Add(category);
            _taskDbContext.SaveChanges();
            return Ok(category);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetCategoryById([FromRoute] int id)
        {
            var category = _taskDbContext.Category.FirstOrDefault(x => x.Id == id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }

        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateCategory([FromRoute] int id, [FromBody] Category category)
        {
            var existingCategory = _taskDbContext.Category.Find(id);
            if (existingCategory == null)
            {
                return NotFound();
            }

            existingCategory.Name = category.Name;
            _taskDbContext.SaveChanges();
            return Ok(existingCategory);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteCategory([FromRoute] int id)
        {
            var category = _taskDbContext.Category.Find(id);
            if (category == null)
            {
                return NotFound();
            }

            _taskDbContext.Category.Remove(category);
            _taskDbContext.SaveChanges();
            return Ok(category);
        }
    }
}
