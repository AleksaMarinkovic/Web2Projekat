using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2BE.Models
{
    public class WorkPlanSwitchingInstructions
    {
        public int WorkPlanSwitchingInstructionstId { get; set; }
        public string Element { get; set; }
        public string Description { get; set; }
        public int WorkPlanId { get; set; }
        public WorkPlan WorkPlan { get; set; }

    }
}
