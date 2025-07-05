using Microsoft.AspNetCore.Mvc;
using Todoapi.Models;
using Microsoft.EntityFrameworkCore;

namespace Todoapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly TodoContext _context;

        public TodoController(TodoContext context)
        {
            _context = context;
        }

        //Get: api/todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> GetTodos()
        {
            return await _context.Todos.ToListAsync();
        }

        //Get: api/todo/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetTodo(int id)
        {
            var todo = await _context.Todos.FindAsync(id);

            if (todo == null)
            {
                return NotFound();
            }

        return todo;
        }



        //Post: api/todo
        [HttpPost]
        public async Task<ActionResult<Todo>> CreateTodo(Todo todo)
        {
            _context.Todos.Add(todo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTodo), new { id = todo.Id }, todo);    
        }



        //Put: api/todo/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTodo(int id, Todo todo)
        {
            if (id != todo.Id)
            {
                return BadRequest("Id mismatch");
            }

            _context.Entry(todo).State = EntityState.Modified;
            todo.UpdatedAt = DateTime.Now;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }



        private bool TodoExists(int id)
        {
            return _context.Todos.Any(e => e.Id == id);
        }



        //Delete: api/todo/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodo(int id)
        {
            var todo = await _context.Todos.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Todos.Remove(todo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }

}