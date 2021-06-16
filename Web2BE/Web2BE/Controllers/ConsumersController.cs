using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Web2BE.Data;
using Web2BE.Models;

namespace Web2BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsumersController : ControllerBase
    {
        private readonly DataContext _context;

        public ConsumersController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Consumers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Consumer>>> GetConsumer()
        {
            return await _context.Consumer.ToListAsync();
        }

        // GET: api/Consumers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Consumer>> GetConsumer(int id)
        {
            var consumer = await _context.Consumer.FindAsync(id);

            if (consumer == null)
            {
                return NotFound();
            }

            return consumer;
        }

        // PUT: api/Consumers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConsumer(int id, Consumer consumer)
        {
            if (id != consumer.ConsumerId)
            {
                return BadRequest();
            }

            _context.Entry(consumer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConsumerExists(id))
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

        // POST: api/Consumers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Consumer>> PostConsumer(Consumer consumer)
        {
            _context.Consumer.Add(consumer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConsumer", new { id = consumer.ConsumerId }, consumer);
        }

        // DELETE: api/Consumers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Consumer>> DeleteConsumer(int id)
        {
            var consumer = await _context.Consumer.FindAsync(id);
            if (consumer == null)
            {
                return NotFound();
            }

            _context.Consumer.Remove(consumer);
            await _context.SaveChangesAsync();

            return consumer;
        }

        private bool ConsumerExists(int id)
        {
            return _context.Consumer.Any(e => e.ConsumerId == id);
        }
    }
}
