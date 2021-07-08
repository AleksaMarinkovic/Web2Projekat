﻿using System;
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
    public class IncidentsController : ControllerBase
    {
        private readonly DataContext _context;

        public IncidentsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Incidents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Incident>>> GetIncident()
        {
            return await _context.Incident.ToListAsync();
        }

        // GET: api/Incidents/5
        [HttpGet("{id}")]
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
        [HttpGet("Drafted")]
        public async Task<ActionResult<int>> GetDraftedIncidents()
        {
            var res = await _context.Incident.Where(d => d.State == "Drafted").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }

        [ActionName("Completed")]
        [HttpGet("Completed")]
        public async Task<ActionResult<int>> GetCompletedIncidents()
        {
            var res = await _context.Incident.Where(d => d.State == "Completed").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }


        [ActionName("Canceled")]
        [HttpGet("Canceled")]
        public async Task<ActionResult<int>> GetCanceledIncidents()
        {
            var res = await _context.Incident.Where(d => d.State == "Canceled").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }


        [ActionName("Issued")]
        [HttpGet("Issued")]
        public async Task<ActionResult<int>> GetIssuedIncidents()
        {
            var res = await _context.Incident.Where(d => d.State == "Issued").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }


        // PUT: api/Incidents/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
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
        [HttpPost]
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
        [HttpDelete("{id}")]
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
