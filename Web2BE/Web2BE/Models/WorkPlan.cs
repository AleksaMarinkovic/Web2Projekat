using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2BE.Models
{
    public class WorkPlan
    {
        public int WorkPlanId { get; set; }
        public string DocumentType { get; set; }
        public int IncidentId { get; set; }
        public Incident Incident{ get; set; }
        public string Status { get; set; }
        public string WorkRequest { get; set; }
        public string StartWorkDate { get; set; }
        public string EndWorkDate { get; set; }
        public string CreationDate { get; set; }
        public string CreatedBy { get; set; }
        public string Address { get; set; }
        public string Company { get; set; }
        public string Purpose { get; set; }
        public string Notes { get; set; }
        public string Crew { get; set; }
        public string Phone { get; set; }
        public string LastEditor { get; set; }
        public string EditedDate { get; set; }
        public string DocumentState { get; set; }
        public string Photo { get; set; }
        //One to Many with WPEq
        public ICollection<WorkPlanEquipment> Equipment { get; set; }
        //One to Many with WPSI
        public ICollection<WorkPlanSwitchingInstructions> SwitchingInstructions { get; set; }
    }
}
