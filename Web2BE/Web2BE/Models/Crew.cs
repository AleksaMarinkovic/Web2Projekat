using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2BE.Models
{
    public class Crew
    {
        public int CrewId { get; set; }
        public string CrewName { get; set; }
        public string Members { get; set; }
    }
}
