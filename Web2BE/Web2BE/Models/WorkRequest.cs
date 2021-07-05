using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2BE.Models
{
    public class WorkRequest
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int WorkRequestId { get; set; }
        public string Type { get; set; }
        public bool EmergencyWork { get; set; }
        public string Company { get; set; }
        public string CreatedDate { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Street { get; set; }
        public string PhoneNumber { get; set; }
        public string Purpose { get; set; }
        public string Notes { get; set; }
        public string LastEditor { get; set; }
        public string DateEdited { get; set; }
        public string DocState { get; set; }
        public string WRImage { get; set; }
        public ICollection<Equipment> Equipment { get; set; }
    }
}
