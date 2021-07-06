using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web2BE.Models
{
    public class SafetyDocument
    {
        public int SafetyDocumentId { get; set; }
        public string Type { get; set; }
        public string PhoneNumber { get; set; }
        public string DateCreated { get; set; }
        public string Details { get; set; }
        public string Notes { get; set; }
        public string LastEditor { get; set; }
        public string DateEdited { get; set; }
        public string State { get; set; }
        public string DocImage { get; set; }
        public ICollection<Equipment> Equipment { get; set; }
        public bool AllWorkOperationsCompleted { get; set; }
        public bool AllTagsRemoved { get; set; }
        public bool GroundingRemoved { get; set; }
        public bool ReadyForService { get; set; }

    }
}