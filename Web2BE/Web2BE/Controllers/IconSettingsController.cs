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
    public class IconSettingsController : ControllerBase
    {
        private readonly DataContext _context;

        public IconSettingsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/IconSettings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IconSettings>>> GetIconSettings()
        {
            return await _context.IconSettings.ToListAsync();
        }

        // GET: api/IconSettings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IconSettings>> GetIconSettings(int id)
        {
            var iconSettings = await _context.IconSettings.FindAsync(id);

            if (iconSettings == null)
            {
                return NotFound();
            }

            return iconSettings;
        }

        // PUT: api/IconSettings/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIconSettings(int id, IconSettings iconSettings)
        {
            if (id != iconSettings.IconSettingsId)
            {
                return BadRequest();
            }

            _context.Entry(iconSettings).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IconSettingsExists(id))
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

        // POST: api/IconSettings
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<IconSettings>> PostIconSettings(IconSettings iconSettings)
        {
            _context.IconSettings.Add(iconSettings);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIconSettings", new { id = iconSettings.IconSettingsId }, iconSettings);
        }

        // DELETE: api/IconSettings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<IconSettings>> DeleteIconSettings(int id)
        {
            var iconSettings = await _context.IconSettings.FindAsync(id);
            if (iconSettings == null)
            {
                return NotFound();
            }

            _context.IconSettings.Remove(iconSettings);
            await _context.SaveChangesAsync();

            return iconSettings;
        }

        private bool IconSettingsExists(int id)
        {
            return _context.IconSettings.Any(e => e.IconSettingsId == id);
        }
    }
}
