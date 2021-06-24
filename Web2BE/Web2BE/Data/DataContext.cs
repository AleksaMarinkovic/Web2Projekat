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
        public DbSet<Web2BE.Models.Consumer> Consumer { get; set; }
        public DbSet<Web2BE.Models.IconSettings> IconSettings { get; set; }
        public DbSet<Web2BE.Models.Incident> Incident { get; set; }
        public DbSet<Web2BE.Models.Notification> Notification { get; set; }
        public DbSet<Web2BE.Models.SafetyDocument> SafetyDocument { get; set; }
        public DbSet<Web2BE.Models.WorkPlan> WorkPlan { get; set; }
        public DbSet<Web2BE.Models.WorkPlanEquipment> WorkPlanEquipment { get; set; }
        public DbSet<Web2BE.Models.WorkPlanSwitchingInstructions> WorkPlanSwitchingInstructions { get; set; }
        public DbSet<Web2BE.Models.NotificationTypesToDisplay> NotificationTypesToDisplay { get; set; }
        public DbSet<Web2BE.Models.Call> Call { get; set; }
    }
}
