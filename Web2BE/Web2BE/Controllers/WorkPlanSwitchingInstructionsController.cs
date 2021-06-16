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
    public class WorkPlanSwitchingInstructionsController : ControllerBase
    {
        private readonly DataContext _context;

        public WorkPlanSwitchingInstructionsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/WorkPlanSwitchingInstructions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkPlanSwitchingInstructions>>> GetWorkPlanSwitchingInstructions()
        {
            return await _context.WorkPlanSwitchingInstructions.ToListAsync();
        }

        // GET: api/WorkPlanSwitchingInstructions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WorkPlanSwitchingInstructions>> GetWorkPlanSwitchingInstructions(int id)
        {
            var workPlanSwitchingInstructions = await _context.WorkPlanSwitchingInstructions.FindAsync(id);

            if (workPlanSwitchingInstructions == null)
            {
                return NotFound();
            }

            return workPlanSwitchingInstructions;
        }

        // PUT: api/WorkPlanSwitchingInstructions/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkPlanSwitchingInstructions(int id, WorkPlanSwitchingInstructions workPlanSwitchingInstructions)
        {
            if (id != workPlanSwitchingInstructions.WorkPlanSwitchingInstructionstId)
            {
                return BadRequest();
            }

            _context.Entry(workPlanSwitchingInstructions).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkPlanSwitchingInstructionsExists(id))
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

        // POST: api/WorkPlanSwitchingInstructions
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<WorkPlanSwitchingInstructions>> PostWorkPlanSwitchingInstructions(WorkPlanSwitchingInstructions workPlanSwitchingInstructions)
        {
            _context.WorkPlanSwitchingInstructions.Add(workPlanSwitchingInstructions);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkPlanSwitchingInstructions", new { id = workPlanSwitchingInstructions.WorkPlanSwitchingInstructionstId }, workPlanSwitchingInstructions);
        }

        // DELETE: api/WorkPlanSwitchingInstructions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<WorkPlanSwitchingInstructions>> DeleteWorkPlanSwitchingInstructions(int id)
        {
            var workPlanSwitchingInstructions = await _context.WorkPlanSwitchingInstructions.FindAsync(id);
            if (workPlanSwitchingInstructions == null)
            {
                return NotFound();
            }

            _context.WorkPlanSwitchingInstructions.Remove(workPlanSwitchingInstructions);
            await _context.SaveChangesAsync();

            return workPlanSwitchingInstructions;
        }

        private bool WorkPlanSwitchingInstructionsExists(int id)
        {
            return _context.WorkPlanSwitchingInstructions.Any(e => e.WorkPlanSwitchingInstructionstId == id);
        }
    }
}
