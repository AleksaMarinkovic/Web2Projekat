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
    public class CallsController : ControllerBase
    {
        private readonly DataContext _context;

        public CallsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Calls
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Call>>> GetCall()
        {
            return await _context.Call.ToListAsync();
        }

        // GET: api/Calls/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Call>> GetCall(int id)
        {
            var call = await _context.Call.FindAsync(id);

            if (call == null)
            {
                return NotFound();
            }

            return call;
        }

        // PUT: api/Calls/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCall(int id, Call call)
        {
            if (id != call.CallId)
            {
                return BadRequest();
            }

            _context.Entry(call).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CallExists(id))
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

        // POST: api/Calls
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Call>> PostCall(Call call)
        {
            _context.Call.Add(call);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCall", new { id = call.CallId }, call);
        }

        // DELETE: api/Calls/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Call>> DeleteCall(int id)
        {
            var call = await _context.Call.FindAsync(id);
            if (call == null)
            {
                return NotFound();
            }

            _context.Call.Remove(call);
            await _context.SaveChangesAsync();

            return call;
        }

        private bool CallExists(int id)
        {
            return _context.Call.Any(e => e.CallId == id);
        }
    }
}
