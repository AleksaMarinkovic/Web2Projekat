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
    public class IncidentsController : ControllerBase
    {
        private readonly DataContext _context;

        public IncidentsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Incidents
        [HttpGet, Authorize]
        public async Task<ActionResult<IEnumerable<Incident>>> GetIncident()
        {
            return await _context.Incident.ToListAsync();
        }

        // GET: api/GetAllIncidentsCreatedByUser/5
        [HttpGet("GetAllIncidentsCreatedByUser/{id}"), Authorize]
        public async Task<ActionResult<IEnumerable<Incident>>> GetAllIncidentsCreatedByUser(int id)
        {
            var res = await _context.Incident.Where(d => d.CreatedBy == id).ToListAsync();
            return res;
        }


        // GET: api/Incidents/5
        [HttpGet("{id}"), Authorize]
        public async Task<ActionResult<Incident>> GetIncident(int id)
        {
            var incident = await _context.Incident.FindAsync(id);

            if (incident == null)
            {
                return NotFound();
            }

            return incident;
        }

        [ActionName("Drafted")]
        [HttpGet("Drafted"), Authorize]
        public async Task<ActionResult<int>> GetDraftedIncidents()
        {
            var a = Request.Headers;
            var res = await _context.Incident.Where(d => d.State == "Drafted").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }

        [ActionName("Completed")]
        [HttpGet("Completed"), Authorize]
        public async Task<ActionResult<int>> GetCompletedIncidents()
        {
            var a = Request.Headers;
            var res = await _context.Incident.Where(d => d.State == "Completed").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }


        [ActionName("Canceled")]
        [HttpGet("Canceled"), Authorize]
        public async Task<ActionResult<int>> GetCanceledIncidents()
        {
            var a = Request.Headers;
            var res = await _context.Incident.Where(d => d.State == "Canceled").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }


        [ActionName("Issued")]
        [HttpGet("Issued"), Authorize]
        public async Task<ActionResult<int>> GetIssuedIncidents()
        {
            var a = Request.Headers;
            var res = await _context.Incident.Where(d => d.State == "Issued").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }

        [ActionName("GetPlannedIncidents")]
        [HttpGet("GetPlannedIncidents"), Authorize]
        public async Task<ActionResult<int[]>> GetPlannedIncidents()
        {
            var a = Request.Headers;
            int[] retVal = new int[4];
            var res = await _context.Incident.Where(d => d.Type == "Planned incident").ToListAsync();            
            var now = DateTime.UtcNow;
            var week1 = DateTime.UtcNow.AddDays(-7);
            var week2 = DateTime.UtcNow.AddDays(-14);
            var week3 = DateTime.UtcNow.AddDays(-21);
            var week4 = DateTime.UtcNow.AddDays(-28);
            int week1Incidents = 0;
            int week2Incidents = 0;
            int week3Incidents = 0;
            int week4Incidents = 0;

            foreach (var incident in res)
            {
                var dateOccured = DateTime.Parse(incident.DateOccured);
                if (dateOccured >= week4 && dateOccured < week3)
                {
                    week4Incidents++;
                }
                if (dateOccured >= week3 && dateOccured < week2)
                {
                    week3Incidents++;
                }
                if (dateOccured >= week2 && dateOccured < week1)
                {
                    week2Incidents++;
                }
                if (dateOccured >= week1 && dateOccured < now)
                {
                    week1Incidents++;
                }
            }
            retVal[0] = week4Incidents;
            retVal[1] = week3Incidents;
            retVal[2] = week2Incidents;
            retVal[3] = week1Incidents;

            return retVal;
        }

        [ActionName("GetUnplannedIncidents")]
        [HttpGet("GetUnplannedIncidents"), Authorize]
        public async Task<ActionResult<int[]>> GetUnplannedIncidents()
        {
            var a = Request.Headers;
            int[] retVal = new int[4];
            var res = await _context.Incident.Where(d => d.Type == "Unplanned incident").ToListAsync();
            var now = DateTime.UtcNow;
            var week1 = DateTime.UtcNow.AddDays(-7);
            var week2 = DateTime.UtcNow.AddDays(-14);
            var week3 = DateTime.UtcNow.AddDays(-21);
            var week4 = DateTime.UtcNow.AddDays(-28);
            int week1Incidents = 0;
            int week2Incidents = 0;
            int week3Incidents = 0;
            int week4Incidents = 0;

            foreach (var incident in res)
            {
                var dateOccured = DateTime.Parse(incident.DateOccured);
                if (dateOccured >= week4 && dateOccured < week3)
                {
                    week4Incidents++;
                }
                if (dateOccured >= week3 && dateOccured < week2)
                {
                    week3Incidents++;
                }
                if (dateOccured >= week2 && dateOccured < week1)
                {
                    week2Incidents++;
                }
                if (dateOccured >= week1 && dateOccured < now)
                {
                    week1Incidents++;
                }
            }
            retVal[0] = week4Incidents;
            retVal[1] = week3Incidents;
            retVal[2] = week2Incidents;
            retVal[3] = week1Incidents;

            return retVal;
        }

        // PUT: api/Incidents/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}"), Authorize]
        public async Task<IActionResult> PutIncident(int id, Incident incident)
        {
            if (id != incident.IncidentId)
            {
                return BadRequest();
            }

            _context.Entry(incident).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IncidentExists(id))
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

        // POST: api/Incidents
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost, Authorize]
        public async Task<ActionResult<Incident>> PostIncident(Incident incident)
        {
            var tempList = new List<Equipment>();
            foreach(var e in incident.Equipment)
            {
                tempList.Add(e);
            }
            incident.Equipment.Clear();
            foreach (var equipment in tempList)
            {
                var entity = await _context.Equipment.Where(e => e.EquipmentId == equipment.EquipmentId).FirstOrDefaultAsync();
                entity.IncidentId = incident.IncidentId;
                entity.Incident = incident;
                _context.Equipment.Update(entity);
                incident.Equipment.Add(entity);
            }
            

            _context.Incident.Add(incident);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIncident", new { id = incident.IncidentId }, incident);
        }

        // DELETE: api/Incidents/5
        [HttpDelete("{id}"), Authorize]
        public async Task<ActionResult<Incident>> DeleteIncident(int id)
        {
            var incident = await _context.Incident.FindAsync(id);
            if (incident == null)
            {
                return NotFound();
            }

            _context.Incident.Remove(incident);
            await _context.SaveChangesAsync();

            return incident;
        }

        private bool IncidentExists(int id)
        {
            return _context.Incident.Any(e => e.IncidentId == id);
        }
    }
}
