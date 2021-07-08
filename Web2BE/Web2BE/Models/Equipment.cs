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

        //FKs
        public Incident Incident { get; set; }
        public int? IncidentId { get; set; }

        public WorkRequest WorkRequest { get; set; }
        public int? WorkRequestId { get; set; }

        public SafetyDocument SafetyDocument { get; set; }
        public int? SafetyDocumentId { get; set; }
    }
}
