using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2BE.Models
{
    public class Equipment
    {
        public int EquipmentId { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Coordinates { get; set; }

        //Foreign Keys
        public int? IncidentId { get; set; }
        public Incident Incident { get; set; }
        public int? WorkRequestId { get; set; }
        public WorkRequest WorkRequest { get; set; }
        public int? SafetyDocumentId { get; set; }
        public SafetyDocument SafetyDocument { get; set; }
        public int? WorkPlanId { get; set; }
        public WorkPlan WorkPlan { get; set; }
    }
}
