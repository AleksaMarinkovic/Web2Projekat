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
    public class WorkPlansController : ControllerBase
    {
        private readonly DataContext _context;

        public WorkPlansController(DataContext context)
        {
            _context = context;
        }

        // GET: api/WorkPlans
        [HttpGet, Authorize]
        public async Task<ActionResult<IEnumerable<WorkPlan>>> GetWorkPlan()
        {
            return await _context.WorkPlan.ToListAsync();
        }

        // GET: api/WorkPlans/5
        [HttpGet("{id}"), Authorize]
        public async Task<ActionResult<WorkPlan>> GetWorkPlan(int id)
        {
            var workPlan = await _context.WorkPlan.FindAsync(id);

            if (workPlan == null)
            {
                return NotFound();
            }

            return workPlan;
        }

        [HttpGet("GetAllWorkPlansCreatedByUser/{id}"), Authorize]
        public async Task<ActionResult<IEnumerable<WorkPlan>>> GetAllWorkPlansCreatedByUser(int id)
        {
            var res = await _context.WorkPlan.Where(d => d.CreatedBy == id).ToListAsync();
            return res;
        }

        [ActionName("NumberOf")]
        [HttpGet("NumberOf"), Authorize]
        public async Task<ActionResult<int>> GetNumberOfWorkPlans()
        {
            var res = await _context.WorkPlan.ToListAsync();
            var retVal = res.Count;
            return retVal;
        }

        // PUT: api/WorkPlans/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}"), Authorize]
        public async Task<IActionResult> PutWorkPlan(int id, WorkPlan workPlan)
        {
            if (id != workPlan.WorkPlanId)
            {
                return BadRequest();
            }

            _context.Entry(workPlan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkPlanExists(id))
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

        // POST: api/WorkPlans
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost, Authorize]
        public async Task<ActionResult<WorkPlan>> PostWorkPlan(WorkPlan workPlan)
        {
            _context.WorkPlan.Add(workPlan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkPlan", new { id = workPlan.WorkPlanId }, workPlan);
        }

        // DELETE: api/WorkPlans/5
        [HttpDelete("{id}"), Authorize]
        public async Task<ActionResult<WorkPlan>> DeleteWorkPlan(int id)
        {
            var workPlan = await _context.WorkPlan.FindAsync(id);
            if (workPlan == null)
            {
                return NotFound();
            }

            _context.WorkPlan.Remove(workPlan);
            await _context.SaveChangesAsync();

            return workPlan;
        }

        private bool WorkPlanExists(int id)
        {
            return _context.WorkPlan.Any(e => e.WorkPlanId == id);
        }
    }
}
