using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2BE.Models
{
    public class Call
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CallId { get; set; }

        //FK        
        public int? ConsumerId { get; set; }
        public Consumer Consumer { get; set; }
        public string Reason { get; set; }
        public string HazardName { get; set; }
        public string HazardPriority { get; set; }

        public string Comment { get; set; }
    }
}
