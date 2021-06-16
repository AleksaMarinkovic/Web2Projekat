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
    public class WorkPlanEquipmentsController : ControllerBase
    {
        private readonly DataContext _context;

        public WorkPlanEquipmentsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/WorkPlanEquipments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkPlanEquipment>>> GetWorkPlanEquipment()
        {
            return await _context.WorkPlanEquipment.ToListAsync();
        }

        // GET: api/WorkPlanEquipments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WorkPlanEquipment>> GetWorkPlanEquipment(int id)
        {
            var workPlanEquipment = await _context.WorkPlanEquipment.FindAsync(id);

            if (workPlanEquipment == null)
            {
                return NotFound();
            }

            return workPlanEquipment;
        }

        // PUT: api/WorkPlanEquipments/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkPlanEquipment(int id, WorkPlanEquipment workPlanEquipment)
        {
            if (id != workPlanEquipment.WorkPlanEquipmentId)
            {
                return BadRequest();
            }

            _context.Entry(workPlanEquipment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkPlanEquipmentExists(id))
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

        // POST: api/WorkPlanEquipments
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<WorkPlanEquipment>> PostWorkPlanEquipment(WorkPlanEquipment workPlanEquipment)
        {
            _context.WorkPlanEquipment.Add(workPlanEquipment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkPlanEquipment", new { id = workPlanEquipment.WorkPlanEquipmentId }, workPlanEquipment);
        }

        // DELETE: api/WorkPlanEquipments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<WorkPlanEquipment>> DeleteWorkPlanEquipment(int id)
        {
            var workPlanEquipment = await _context.WorkPlanEquipment.FindAsync(id);
            if (workPlanEquipment == null)
            {
                return NotFound();
            }

            _context.WorkPlanEquipment.Remove(workPlanEquipment);
            await _context.SaveChangesAsync();

            return workPlanEquipment;
        }

        private bool WorkPlanEquipmentExists(int id)
        {
            return _context.WorkPlanEquipment.Any(e => e.WorkPlanEquipmentId == id);
        }
    }
}
