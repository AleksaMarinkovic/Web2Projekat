﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Web2BE.Data;

namespace Web2BE.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210706131532_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.15")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Web2BE.Models.Call", b =>
                {
                    b.Property<int>("CallId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ConsumerId")
                        .HasColumnType("int");

                    b.Property<string>("HazardName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HazardPriority")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.Property<string>("Reason")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CallId");

                    b.HasIndex("ConsumerId");

                    b.HasIndex("IncidentId");

                    b.ToTable("Call");
                });

            modelBuilder.Entity("Web2BE.Models.Consumer", b =>
                {
                    b.Property<int>("ConsumerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ConsumerType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Priority")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ConsumerId");

                    b.ToTable("Consumer");
                });

            modelBuilder.Entity("Web2BE.Models.Crew", b =>
                {
                    b.Property<int>("CrewId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CrewName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Members")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CrewId");

                    b.ToTable("Crews");
                });

            modelBuilder.Entity("Web2BE.Models.Equipment", b =>
                {
                    b.Property<int>("EquipmentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Coordinates")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("SafetyDocumentId")
                        .HasColumnType("int");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("WorkRequestId")
                        .HasColumnType("int");

                    b.HasKey("EquipmentId");

                    b.HasIndex("IncidentId");

                    b.HasIndex("SafetyDocumentId");

                    b.HasIndex("WorkRequestId");

                    b.ToTable("Equipment");
                });

            modelBuilder.Entity("Web2BE.Models.IconSettings", b =>
                {
                    b.Property<int>("IconSettingsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Icon")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IconType")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IconSettingsId");

                    b.ToTable("IconSettings");
                });

            modelBuilder.Entity("Web2BE.Models.Incident", b =>
                {
                    b.Property<int>("IncidentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ATA")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AffectedCustomer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Approved")
                        .HasColumnType("bit");

                    b.Property<string>("Cause")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ConstructionType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DateOccured")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ETA")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ETR")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IncidentImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Material")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumberOfCalls")
                        .HasColumnType("int");

                    b.Property<string>("Priority")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Resolver")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ScheduledTime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Subcause")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Voltage")
                        .HasColumnType("int");

                    b.HasKey("IncidentId");

                    b.ToTable("Incident");
                });

            modelBuilder.Entity("Web2BE.Models.Notification", b =>
                {
                    b.Property<int>("NotificationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("IncdidentId")
                        .HasColumnType("int");

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.Property<string>("NotificationType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Read")
                        .HasColumnType("bit");

                    b.Property<int?>("SafetyDocumentId")
                        .HasColumnType("int");

                    b.Property<string>("TimeStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("WorkPlanId")
                        .HasColumnType("int");

                    b.Property<int?>("WorkRequestId")
                        .HasColumnType("int");

                    b.HasKey("NotificationId");

                    b.HasIndex("IncidentId");

                    b.HasIndex("SafetyDocumentId");

                    b.HasIndex("WorkPlanId");

                    b.HasIndex("WorkRequestId");

                    b.ToTable("Notification");
                });

            modelBuilder.Entity("Web2BE.Models.NotificationTypesToDisplay", b =>
                {
                    b.Property<int>("NotificationTypesToDisplayId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("NotificationTypeToDisplay")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("NotificationTypesToDisplayId");

                    b.ToTable("NotificationTypesToDisplay");
                });

            modelBuilder.Entity("Web2BE.Models.SafetyDocument", b =>
                {
                    b.Property<int>("SafetyDocumentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("AllTagsRemoved")
                        .HasColumnType("bit");

                    b.Property<bool>("AllWorkOperationsCompleted")
                        .HasColumnType("bit");

                    b.Property<string>("DateCreated")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DateEdited")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Details")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DocImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("GroundingRemoved")
                        .HasColumnType("bit");

                    b.Property<string>("LastEditor")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("ReadyForService")
                        .HasColumnType("bit");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SafetyDocumentId");

                    b.ToTable("SafetyDocument");
                });

            modelBuilder.Entity("Web2BE.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DateOfBirth")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Photo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserTypes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Userame")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Web2BE.Models.WorkPlan", b =>
                {
                    b.Property<int>("WorkPlanId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Company")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CreatedBy")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CreationDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Crew")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DocumentState")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DocumentType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EditedDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EndWorkDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IncidentId")
                        .HasColumnType("int");

                    b.Property<string>("LastEditor")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Photo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Purpose")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StartWorkDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("WorkRequest")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("WorkPlanId");

                    b.HasIndex("IncidentId");

                    b.ToTable("WorkPlan");
                });

            modelBuilder.Entity("Web2BE.Models.WorkPlanEquipment", b =>
                {
                    b.Property<int>("WorkPlanEquipmentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Coordinates")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EquipmentType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("WorkPlanId")
                        .HasColumnType("int");

                    b.HasKey("WorkPlanEquipmentId");

                    b.HasIndex("WorkPlanId");

                    b.ToTable("WorkPlanEquipment");
                });

            modelBuilder.Entity("Web2BE.Models.WorkPlanSwitchingInstructions", b =>
                {
                    b.Property<int>("WorkPlanSwitchingInstructionstId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Element")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("WorkPlanId")
                        .HasColumnType("int");

                    b.HasKey("WorkPlanSwitchingInstructionstId");

                    b.HasIndex("WorkPlanId");

                    b.ToTable("WorkPlanSwitchingInstructions");
                });

            modelBuilder.Entity("Web2BE.Models.WorkRequest", b =>
                {
                    b.Property<int>("WorkRequestId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Company")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CreatedDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DateEdited")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DocState")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("EmergencyWork")
                        .HasColumnType("bit");

                    b.Property<string>("EndDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastEditor")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Purpose")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StartDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Street")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("WRImage")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("WorkRequestId");

                    b.ToTable("WorkRequests");
                });

            modelBuilder.Entity("Web2BE.Models.Call", b =>
                {
                    b.HasOne("Web2BE.Models.Consumer", "Consumer")
                        .WithMany()
                        .HasForeignKey("ConsumerId");

                    b.HasOne("Web2BE.Models.Incident", null)
                        .WithMany("Calls")
                        .HasForeignKey("IncidentId");
                });

            modelBuilder.Entity("Web2BE.Models.Equipment", b =>
                {
                    b.HasOne("Web2BE.Models.Incident", null)
                        .WithMany("Equipment")
                        .HasForeignKey("IncidentId");

                    b.HasOne("Web2BE.Models.SafetyDocument", null)
                        .WithMany("Equipment")
                        .HasForeignKey("SafetyDocumentId");

                    b.HasOne("Web2BE.Models.WorkRequest", null)
                        .WithMany("Equipment")
                        .HasForeignKey("WorkRequestId");
                });

            modelBuilder.Entity("Web2BE.Models.Notification", b =>
                {
                    b.HasOne("Web2BE.Models.Incident", "Incident")
                        .WithMany()
                        .HasForeignKey("IncidentId");

                    b.HasOne("Web2BE.Models.SafetyDocument", "SafetyDocument")
                        .WithMany()
                        .HasForeignKey("SafetyDocumentId");

                    b.HasOne("Web2BE.Models.WorkPlan", "WorkPlan")
                        .WithMany()
                        .HasForeignKey("WorkPlanId");

                    b.HasOne("Web2BE.Models.WorkRequest", "WorkRequest")
                        .WithMany()
                        .HasForeignKey("WorkRequestId");
                });

            modelBuilder.Entity("Web2BE.Models.WorkPlan", b =>
                {
                    b.HasOne("Web2BE.Models.Incident", "Incident")
                        .WithMany()
                        .HasForeignKey("IncidentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Web2BE.Models.WorkPlanEquipment", b =>
                {
                    b.HasOne("Web2BE.Models.WorkPlan", "WorkPlan")
                        .WithMany("Equipment")
                        .HasForeignKey("WorkPlanId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Web2BE.Models.WorkPlanSwitchingInstructions", b =>
                {
                    b.HasOne("Web2BE.Models.WorkPlan", "WorkPlan")
                        .WithMany("SwitchingInstructions")
                        .HasForeignKey("WorkPlanId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
