﻿using System;
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
        public async Task<ActionResult<IEnumerable<WorkPlan>>> GetWorkPlans()
        {
            return await _context.WorkPlan.ToListAsync();
        }

        // GET: api/WorkPlan/5
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

        // POST: api/WorkPlan
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost, Authorize]
        public async Task<ActionResult<WorkPlan>> PostWorkPlan(WorkPlan workPlan)
        {
            var tempEquipment = new List<Equipment>();
            var tempSwitchingInstructions = new List<WorkPlanSwitchingInstructions>();
            foreach (var e in workPlan.Equipment)
            {
                tempEquipment.Add(e);
            }
            workPlan.Equipment.Clear();
            foreach (var i in workPlan.SwitchingInstructions)
            {
                tempSwitchingInstructions.Add(i);
            }
            workPlan.SwitchingInstructions.Clear();


            foreach (var equipment in tempEquipment)
            {
                var entity = await _context.Equipment.Where(e => e.EquipmentId == equipment.EquipmentId).FirstOrDefaultAsync();
                entity.WorkPlanId = workPlan.WorkPlanId;
                entity.WorkPlan = workPlan;
                _context.Equipment.Update(entity);
                workPlan.Equipment.Add(entity);
            }
            foreach (var switchingInstruction in tempSwitchingInstructions)
            {
                var entity = await _context.WorkPlanSwitchingInstructions.Where(e => e.WorkPlanSwitchingInstructionstId == switchingInstruction.WorkPlanSwitchingInstructionstId).FirstOrDefaultAsync();
                entity.WorkPlanId = workPlan.WorkPlanId;
                entity.WorkPlan = workPlan;
                _context.WorkPlanSwitchingInstructions.Update(entity);
                workPlan.SwitchingInstructions.Add(entity);
            }

            _context.WorkPlan.Add(workPlan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkPlan", new { id = workPlan.WorkPlanId }, workPlan);
        }


        [ActionName("Drafted")]
        [HttpGet("Drafted"), Authorize]
        public async Task<ActionResult<int>> GetDraftedWorkPlans()
        {
            var res = await _context.WorkPlan.Where(d => d.Status == "Draft").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }

        [ActionName("Completed")]
        [HttpGet("Completed"), Authorize]
        public async Task<ActionResult<int>> GetCompletedWorkPlans()
        {
            var res = await _context.WorkPlan.Where(d => d.Status == "Completed").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }


        [ActionName("Canceled")]
        [HttpGet("Canceled"), Authorize]
        public async Task<ActionResult<int>> GetCanceledWorkPlans()
        {
            var res = await _context.WorkPlan.Where(d => d.Status == "Canceled").ToListAsync();
            var retVal = res.Count;
            return retVal;
        }


        [ActionName("Issued")]
        [HttpGet("Issued"), Authorize]
        public async Task<ActionResult<int>> GetIssuedWorkPlans()
        {
            var res = await _context.WorkPlan.Where(d => d.Status == "Issued").ToListAsync();
            var retVal = res.Count;
            return retVal;
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
