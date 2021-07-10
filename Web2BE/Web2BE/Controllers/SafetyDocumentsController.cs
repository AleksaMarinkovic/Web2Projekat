using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
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
        [HttpGet, Authorize]
        public async Task<ActionResult<IEnumerable<SafetyDocument>>> GetSafetyDocument()
        {
            return await _context.SafetyDocument.ToListAsync();
        }

        // GET: api/SafetyDocuments/5
        [HttpGet("{id}"), Authorize]
        public async Task<ActionResult<SafetyDocument>> GetSafetyDocument(int id)
        {
            var safetyDocument = await _context.SafetyDocument.FindAsync(id);

            if (safetyDocument == null)
            {
                return NotFound();
            }

            return safetyDocument;
        }

        [ActionName("Drafted")]
        [HttpGet("Drafted"), Authorize]
        public async Task<ActionResult<int>> GetDraftedSafetyDocuments()
        {
            var res = await _context.SafetyDocument.Where(d => d.State == "Drafted").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }

        [ActionName("Completed")]
        [HttpGet("Completed"), Authorize]
        public async Task<ActionResult<int>> GetCompletedSafetyDocuments()
        {
            var res = await _context.SafetyDocument.Where(d => d.State == "Completed").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }


        [ActionName("Canceled")]
        [HttpGet("Canceled"), Authorize]
        public async Task<ActionResult<int>> GetCanceledSafetyDocuments()
        {
            var res = await _context.SafetyDocument.Where(d => d.State == "Canceled").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }


        [ActionName("Issued")]
        [HttpGet("Issued"), Authorize]
        public async Task<ActionResult<int>> GetIssuedSafetyDocuments()
        {
            var res = await _context.SafetyDocument.Where(d => d.State == "Issued").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }

        [ActionName("NumberOf")]
        [HttpGet("NumberOf"), Authorize]
        public async Task<ActionResult<int>> GetNumberOfSafetyDocuments()
        {
            var res = await _context.SafetyDocument.ToListAsync();
            var retVal = res.Count;
            return retVal;
        }

        // PUT: api/SafetyDocuments/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}"), Authorize]
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
        [HttpPost, Authorize]
        public async Task<ActionResult<SafetyDocument>> PostSafetyDocument(SafetyDocument safetyDocument)
        {
            var tempEquipment = new List<Equipment>();
            if (safetyDocument.Equipment != null)
            {
                foreach (var e in safetyDocument.Equipment)
                {
                    tempEquipment.Add(e);
                }
                safetyDocument.Equipment.Clear();

                foreach (var equipment in tempEquipment)
                {
                    var entity = await _context.Equipment.Where(e => e.EquipmentId == equipment.EquipmentId).FirstOrDefaultAsync();
                    entity.SafetyDocumentId = safetyDocument.SafetyDocumentId;
                    entity.SafetyDocument = safetyDocument;
                    _context.Equipment.Update(entity);
                    safetyDocument.Equipment.Add(entity);
                }
            }



            if (safetyDocument.WorkPlan != null)
            {
                var entityWP = await _context.WorkPlan.Where(e => e.WorkPlanId == safetyDocument.WorkPlan.WorkPlanId).FirstOrDefaultAsync();
                entityWP.SafetyDocumentId = safetyDocument.SafetyDocumentId;
                entityWP.SafetyDocument = safetyDocument;
                _context.WorkPlan.Update(entityWP);
                safetyDocument.WorkPlan = entityWP;
            }


            _context.SafetyDocument.Add(safetyDocument);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSafetyDocument", new { id = safetyDocument.SafetyDocumentId }, safetyDocument);
        }

        // DELETE: api/SafetyDocuments/5
        [HttpDelete("{id}"), Authorize]
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
