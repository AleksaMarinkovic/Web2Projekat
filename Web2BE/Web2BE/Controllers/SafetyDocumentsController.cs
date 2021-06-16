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
    public class SafetyDocumentsController : ControllerBase
    {
        private readonly DataContext _context;

        public SafetyDocumentsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/SafetyDocuments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SafetyDocument>>> GetSafetyDocument()
        {
            return await _context.SafetyDocument.ToListAsync();
        }

        // GET: api/SafetyDocuments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SafetyDocument>> GetSafetyDocument(int id)
        {
            var safetyDocument = await _context.SafetyDocument.FindAsync(id);

            if (safetyDocument == null)
            {
                return NotFound();
            }

            return safetyDocument;
        }

        // PUT: api/SafetyDocuments/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSafetyDocument(int id, SafetyDocument safetyDocument)
        {
            if (id != safetyDocument.SafetyDocumentId)
            {
                return BadRequest();
            }

            _context.Entry(safetyDocument).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SafetyDocumentExists(id))
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

        // POST: api/SafetyDocuments
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<SafetyDocument>> PostSafetyDocument(SafetyDocument safetyDocument)
        {
            _context.SafetyDocument.Add(safetyDocument);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSafetyDocument", new { id = safetyDocument.SafetyDocumentId }, safetyDocument);
        }

        // DELETE: api/SafetyDocuments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SafetyDocument>> DeleteSafetyDocument(int id)
        {
            var safetyDocument = await _context.SafetyDocument.FindAsync(id);
            if (safetyDocument == null)
            {
                return NotFound();
            }

            _context.SafetyDocument.Remove(safetyDocument);
            await _context.SaveChangesAsync();

            return safetyDocument;
        }

        private bool SafetyDocumentExists(int id)
        {
            return _context.SafetyDocument.Any(e => e.SafetyDocumentId == id);
        }
    }
}
