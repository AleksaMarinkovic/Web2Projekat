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
    public class WorkRequestsController : ControllerBase
    {
        private readonly DataContext _context;

        public WorkRequestsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/WorkRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkRequest>>> GetWorkRequests()
        {
            return await _context.WorkRequests.ToListAsync();
        }

        // GET: api/WorkRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WorkRequest>> GetWorkRequest(int id)
        {
            var workRequest = await _context.WorkRequests.FindAsync(id);

            if (workRequest == null)
            {
                return NotFound();
            }

            return workRequest;
        }

        // PUT: api/WorkRequests/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkRequest(int id, WorkRequest workRequest)
        {
            if (id != workRequest.WorkRequestId)
            {
                return BadRequest();
            }

            _context.Entry(workRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkRequestExists(id))
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

        // POST: api/WorkRequests
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<WorkRequest>> PostWorkRequest(WorkRequest workRequest)
        {
            _context.WorkRequests.Add(workRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkRequest", new { id = workRequest.WorkRequestId }, workRequest);
        }

        // DELETE: api/WorkRequests/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<WorkRequest>> DeleteWorkRequest(int id)
        {
            var workRequest = await _context.WorkRequests.FindAsync(id);
            if (workRequest == null)
            {
                return NotFound();
            }

            _context.WorkRequests.Remove(workRequest);
            await _context.SaveChangesAsync();

            return workRequest;
        }

        private bool WorkRequestExists(int id)
        {
            return _context.WorkRequests.Any(e => e.WorkRequestId == id);
        }
    }
}
