using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web2BE.Models
{
    public class Incident
    {
        public int IncidentId { get; set; }
        public string AffectedCustomer { get; set; }
        public string Type { get; set; }
        public string DateOccured { get; set; }
        public string Priority { get; set; }
        public string ETR { get; set; }
        public bool Approved { get; set; }
        public int NumberOfCalls { get; set; }
        public int Voltage { get; set; }
        public string ETA { get; set; }
        public string ATA { get; set; }
        public string ScheduledTime { get; set; }
        public string Resolver { get; set; }
        public ICollection<Call> Calls { get; set; }
        public string Cause { get; set; }
        public string Subcause { get; set; }
        public string ConstructionType { get; set; }
        public string Material { get; set; }
        public string IncidentImage { get; set; }
        public ICollection<Equipment> Equipment { get; set; }

    }
}