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
    public class AddressPrioritiesController : ControllerBase
    {
        private readonly DataContext _context;

        public AddressPrioritiesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/AddressPriorities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AddressPriority>>> GetAddressPriority()
        {
            return await _context.AddressPriority.ToListAsync();
        }

        // GET: api/AddressPriorities/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AddressPriority>> GetAddressPriority(int id)
        {
            var addressPriority = await _context.AddressPriority.FindAsync(id);

            if (addressPriority == null)
            {
                return NotFound();
            }

            return addressPriority;
        }

        // PUT: api/AddressPriorities/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAddressPriority(int id, AddressPriority addressPriority)
        {
            if (id != addressPriority.AddressId)
            {
                return BadRequest();
            }

            _context.Entry(addressPriority).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AddressPriorityExists(id))
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

        // POST: api/AddressPriorities
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<AddressPriority>> PostAddressPriority(AddressPriority addressPriority)
        {
            _context.AddressPriority.Add(addressPriority);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAddressPriority", new { id = addressPriority.AddressId }, addressPriority);
        }

        // DELETE: api/AddressPriorities/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AddressPriority>> DeleteAddressPriority(int id)
        {
            var addressPriority = await _context.AddressPriority.FindAsync(id);
            if (addressPriority == null)
            {
                return NotFound();
            }

            _context.AddressPriority.Remove(addressPriority);
            await _context.SaveChangesAsync();

            return addressPriority;
        }

        private bool AddressPriorityExists(int id)
        {
            return _context.AddressPriority.Any(e => e.AddressId == id);
        }
    }
}
