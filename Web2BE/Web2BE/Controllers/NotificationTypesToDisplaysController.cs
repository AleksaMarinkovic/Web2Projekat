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
    public class NotificationTypesToDisplaysController : ControllerBase
    {
        private readonly DataContext _context;

        public NotificationTypesToDisplaysController(DataContext context)
        {
            _context = context;
        }

        // GET: api/NotificationTypesToDisplays
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NotificationTypesToDisplay>>> GetNotificationTypesToDisplay()
        {
            return await _context.NotificationTypesToDisplay.ToListAsync();
        }

        // GET: api/NotificationTypesToDisplays/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NotificationTypesToDisplay>> GetNotificationTypesToDisplay(int id)
        {
            var notificationTypesToDisplay = await _context.NotificationTypesToDisplay.FindAsync(id);

            if (notificationTypesToDisplay == null)
            {
                return NotFound();
            }

            return notificationTypesToDisplay;
        }

        // PUT: api/NotificationTypesToDisplays/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNotificationTypesToDisplay(int id, NotificationTypesToDisplay notificationTypesToDisplay)
        {
            if (id != notificationTypesToDisplay.NotificationTypesToDisplayId)
            {
                return BadRequest();
            }

            _context.Entry(notificationTypesToDisplay).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NotificationTypesToDisplayExists(id))
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

        // POST: api/NotificationTypesToDisplays
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<NotificationTypesToDisplay>> PostNotificationTypesToDisplay(NotificationTypesToDisplay notificationTypesToDisplay)
        {
            _context.NotificationTypesToDisplay.Add(notificationTypesToDisplay);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNotificationTypesToDisplay", new { id = notificationTypesToDisplay.NotificationTypesToDisplayId }, notificationTypesToDisplay);
        }

        // DELETE: api/NotificationTypesToDisplays/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<NotificationTypesToDisplay>> DeleteNotificationTypesToDisplay(int id)
        {
            var notificationTypesToDisplay = await _context.NotificationTypesToDisplay.FindAsync(id);
            if (notificationTypesToDisplay == null)
            {
                return NotFound();
            }

            _context.NotificationTypesToDisplay.Remove(notificationTypesToDisplay);
            await _context.SaveChangesAsync();

            return notificationTypesToDisplay;
        }

        private bool NotificationTypesToDisplayExists(int id)
        {
            return _context.NotificationTypesToDisplay.Any(e => e.NotificationTypesToDisplayId == id);
        }
    }
}
