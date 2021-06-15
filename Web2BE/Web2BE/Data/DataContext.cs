using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2BE.Models;

namespace Web2BE.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        //public DbSet<Consumer> Consumers {get;set;}
        //public DbSet<Settings> Settings { get; set; }
        //public DbSet<IconSettings> IconSettings { get; set; }
        //public DbSet<Notification> Notifications { get; set; }
        //public DbSet<WorkPlan> WorkPlans { get; set; }
        //public DbSet<WorkPlanEquipment> WorkPlanEquipments { get; set; }
        //public DbSet<WorkPlanSwitchingInstructions> WorkPlanSwitchingInstructions { get; set; }





    }
}
