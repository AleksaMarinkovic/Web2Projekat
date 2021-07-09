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
        public DbSet<Web2BE.Models.WorkPlanSwitchingInstructions> WorkPlanSwitchingInstructions { get; set; }
        public DbSet<Web2BE.Models.NotificationTypesToDisplay> NotificationTypesToDisplay { get; set; }
        public DbSet<Web2BE.Models.Call> Call { get; set; }
        public DbSet<Equipment> Equipment { get; set; }
        public DbSet<WorkRequest> WorkRequests { get; set; }
        public DbSet<Crew> Crews { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<Call>().Property(c => c.CallId).ValueGeneratedOnAdd();
            modelBuilder.Entity<Call>().HasKey(c => c.CallId);

            modelBuilder.Entity<Consumer>().Property(c => c.ConsumerId).ValueGeneratedOnAdd();
            modelBuilder.Entity<Consumer>().HasKey(c => c.ConsumerId);

            modelBuilder.Entity<Crew>().Property(c => c.CrewId).ValueGeneratedOnAdd();
            modelBuilder.Entity<Crew>().HasKey(c => c.CrewId);

            modelBuilder.Entity<Equipment>().Property(c => c.EquipmentId).ValueGeneratedOnAdd();
            modelBuilder.Entity<Equipment>().HasKey(c => c.EquipmentId);
            modelBuilder.Entity<Equipment>().HasOne(n => n.Incident).WithMany(n => n.Equipment).HasForeignKey(n => n.IncidentId).IsRequired(false);
            modelBuilder.Entity<Equipment>().HasOne(n => n.WorkRequest).WithMany(n => n.Equipment).HasForeignKey(n => n.WorkRequestId).IsRequired(false);
            modelBuilder.Entity<Equipment>().HasOne(n => n.SafetyDocument).WithMany(n => n.Equipment).HasForeignKey(n => n.SafetyDocumentId).IsRequired(false);

            modelBuilder.Entity<IconSettings>().Property(c => c.IconSettingsId).ValueGeneratedOnAdd();
            modelBuilder.Entity<IconSettings>().HasKey(c => c.IconSettingsId);

            modelBuilder.Entity<Incident>().Property(c => c.IncidentId).ValueGeneratedOnAdd();
            modelBuilder.Entity<Incident>().HasKey(c => c.IncidentId);
            modelBuilder.Entity<Incident>().HasOne(n => n.WorkRequest).WithMany(n => n.Incidents).HasForeignKey(n => n.WorkRequestId).IsRequired(false);

            modelBuilder.Entity<Notification>().Property(c => c.NotificationId).ValueGeneratedOnAdd();
            modelBuilder.Entity<Notification>().HasKey(c => c.NotificationId);

            modelBuilder.Entity<NotificationTypesToDisplay>().Property(c => c.NotificationTypesToDisplayId).ValueGeneratedOnAdd();
            modelBuilder.Entity<NotificationTypesToDisplay>().HasKey(c => c.NotificationTypesToDisplayId);

            modelBuilder.Entity<SafetyDocument>().Property(c => c.SafetyDocumentId).ValueGeneratedOnAdd();
            modelBuilder.Entity<SafetyDocument>().HasKey(c => c.SafetyDocumentId);

            modelBuilder.Entity<User>().Property(c => c.UserId).ValueGeneratedOnAdd();
            modelBuilder.Entity<User>().HasKey(c => c.UserId);

            modelBuilder.Entity<WorkPlan>().Property(c => c.WorkPlanId).ValueGeneratedOnAdd();
            modelBuilder.Entity<WorkPlan>().HasKey(c => c.WorkPlanId);
            
            modelBuilder.Entity<WorkPlanSwitchingInstructions>().Property(c => c.WorkPlanSwitchingInstructionstId).ValueGeneratedOnAdd();
            modelBuilder.Entity<WorkPlanSwitchingInstructions>().HasKey(c => c.WorkPlanSwitchingInstructionstId);

            modelBuilder.Entity<WorkRequest>().Property(c => c.WorkRequestId).ValueGeneratedOnAdd();
            modelBuilder.Entity<WorkRequest>().HasKey(c => c.WorkRequestId);
        }
    }
}
