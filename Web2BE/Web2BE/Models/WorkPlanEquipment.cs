using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2BE.Models
{
    public class WorkPlanEquipment
    {
        public int WorkPlanEquipmentId { get; set; }
        public string Name { get; set; }
        public string EquipmentType { get; set; }
        public string Address { get; set; }
        public string Coordinates { get; set; }
        public int WorkPlanId { get; set; }

        public WorkPlan WorkPlan { get; set; }
    }
}
