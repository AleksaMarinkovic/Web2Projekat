using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2BE.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Consumer",
                columns: table => new
                {
                    ConsumerId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
                    Priority = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    ConsumerType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consumer", x => x.ConsumerId);
                });

            migrationBuilder.CreateTable(
                name: "Crews",
                columns: table => new
                {
                    CrewId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CrewName = table.Column<string>(nullable: true),
                    Members = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Crews", x => x.CrewId);
                });

            migrationBuilder.CreateTable(
                name: "IconSettings",
                columns: table => new
                {
                    IconSettingsId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IconType = table.Column<string>(nullable: true),
                    Icon = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IconSettings", x => x.IconSettingsId);
                });

            migrationBuilder.CreateTable(
                name: "Incident",
                columns: table => new
                {
                    IncidentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AffectedCustomer = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    DateOccured = table.Column<string>(nullable: true),
                    Priority = table.Column<string>(nullable: true),
                    ETR = table.Column<string>(nullable: true),
                    Approved = table.Column<bool>(nullable: false),
                    NumberOfCalls = table.Column<int>(nullable: false),
                    Voltage = table.Column<int>(nullable: false),
                    ETA = table.Column<string>(nullable: true),
                    ATA = table.Column<string>(nullable: true),
                    ScheduledTime = table.Column<string>(nullable: true),
                    Resolver = table.Column<string>(nullable: true),
                    Cause = table.Column<string>(nullable: true),
                    Subcause = table.Column<string>(nullable: true),
                    ConstructionType = table.Column<string>(nullable: true),
                    Material = table.Column<string>(nullable: true),
                    IncidentImage = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incident", x => x.IncidentId);
                });

            migrationBuilder.CreateTable(
                name: "NotificationTypesToDisplay",
                columns: table => new
                {
                    NotificationTypesToDisplayId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NotificationTypeToDisplay = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotificationTypesToDisplay", x => x.NotificationTypesToDisplayId);
                });

            migrationBuilder.CreateTable(
                name: "SafetyDocument",
                columns: table => new
                {
                    SafetyDocumentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    DateCreated = table.Column<string>(nullable: true),
                    Details = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true),
                    LastEditor = table.Column<string>(nullable: true),
                    DateEdited = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true),
                    DocImage = table.Column<string>(nullable: true),
                    AllWorkOperationsCompleted = table.Column<bool>(nullable: false),
                    AllTagsRemoved = table.Column<bool>(nullable: false),
                    GroundingRemoved = table.Column<bool>(nullable: false),
                    ReadyForService = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SafetyDocument", x => x.SafetyDocumentId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Userame = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    UserTypes = table.Column<string>(nullable: true),
                    DateOfBirth = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Photo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "WorkRequests",
                columns: table => new
                {
                    WorkRequestId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(nullable: true),
                    EmergencyWork = table.Column<bool>(nullable: false),
                    Company = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<string>(nullable: true),
                    StartDate = table.Column<string>(nullable: true),
                    EndDate = table.Column<string>(nullable: true),
                    Street = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Purpose = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true),
                    LastEditor = table.Column<string>(nullable: true),
                    DateEdited = table.Column<string>(nullable: true),
                    DocState = table.Column<string>(nullable: true),
                    WRImage = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkRequests", x => x.WorkRequestId);
                });

            migrationBuilder.CreateTable(
                name: "Call",
                columns: table => new
                {
                    CallId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ConsumerId = table.Column<int>(nullable: true),
                    Reason = table.Column<string>(nullable: true),
                    HazardName = table.Column<string>(nullable: true),
                    HazardPriority = table.Column<string>(nullable: true),
                    Comment = table.Column<string>(nullable: true),
                    IncidentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Call", x => x.CallId);
                    table.ForeignKey(
                        name: "FK_Call_Consumer_ConsumerId",
                        column: x => x.ConsumerId,
                        principalTable: "Consumer",
                        principalColumn: "ConsumerId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Call_Incident_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incident",
                        principalColumn: "IncidentId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WorkPlan",
                columns: table => new
                {
                    WorkPlanId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DocumentType = table.Column<string>(nullable: true),
                    IncidentId = table.Column<int>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    WorkRequest = table.Column<string>(nullable: true),
                    StartWorkDate = table.Column<string>(nullable: true),
                    EndWorkDate = table.Column<string>(nullable: true),
                    CreationDate = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Company = table.Column<string>(nullable: true),
                    Purpose = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true),
                    Crew = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    LastEditor = table.Column<string>(nullable: true),
                    EditedDate = table.Column<string>(nullable: true),
                    DocumentState = table.Column<string>(nullable: true),
                    Photo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkPlan", x => x.WorkPlanId);
                    table.ForeignKey(
                        name: "FK_WorkPlan_Incident_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incident",
                        principalColumn: "IncidentId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Equipment",
                columns: table => new
                {
                    EquipmentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Coordinates = table.Column<string>(nullable: true),
                    IncidentId = table.Column<int>(nullable: true),
                    SafetyDocumentId = table.Column<int>(nullable: true),
                    WorkRequestId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Equipment", x => x.EquipmentId);
                    table.ForeignKey(
                        name: "FK_Equipment_Incident_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incident",
                        principalColumn: "IncidentId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Equipment_SafetyDocument_SafetyDocumentId",
                        column: x => x.SafetyDocumentId,
                        principalTable: "SafetyDocument",
                        principalColumn: "SafetyDocumentId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Equipment_WorkRequests_WorkRequestId",
                        column: x => x.WorkRequestId,
                        principalTable: "WorkRequests",
                        principalColumn: "WorkRequestId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Notification",
                columns: table => new
                {
                    NotificationId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NotificationType = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Read = table.Column<bool>(nullable: false),
                    TimeStamp = table.Column<string>(nullable: true),
                    IncdidentId = table.Column<int>(nullable: true),
                    IncidentId = table.Column<int>(nullable: true),
                    SafetyDocumentId = table.Column<int>(nullable: true),
                    WorkPlanId = table.Column<int>(nullable: true),
                    WorkRequestId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notification", x => x.NotificationId);
                    table.ForeignKey(
                        name: "FK_Notification_Incident_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incident",
                        principalColumn: "IncidentId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Notification_SafetyDocument_SafetyDocumentId",
                        column: x => x.SafetyDocumentId,
                        principalTable: "SafetyDocument",
                        principalColumn: "SafetyDocumentId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Notification_WorkPlan_WorkPlanId",
                        column: x => x.WorkPlanId,
                        principalTable: "WorkPlan",
                        principalColumn: "WorkPlanId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Notification_WorkRequests_WorkRequestId",
                        column: x => x.WorkRequestId,
                        principalTable: "WorkRequests",
                        principalColumn: "WorkRequestId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WorkPlanEquipment",
                columns: table => new
                {
                    WorkPlanEquipmentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    EquipmentType = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Coordinates = table.Column<string>(nullable: true),
                    WorkPlanId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkPlanEquipment", x => x.WorkPlanEquipmentId);
                    table.ForeignKey(
                        name: "FK_WorkPlanEquipment_WorkPlan_WorkPlanId",
                        column: x => x.WorkPlanId,
                        principalTable: "WorkPlan",
                        principalColumn: "WorkPlanId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkPlanSwitchingInstructions",
                columns: table => new
                {
                    WorkPlanSwitchingInstructionstId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Element = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    WorkPlanId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkPlanSwitchingInstructions", x => x.WorkPlanSwitchingInstructionstId);
                    table.ForeignKey(
                        name: "FK_WorkPlanSwitchingInstructions_WorkPlan_WorkPlanId",
                        column: x => x.WorkPlanId,
                        principalTable: "WorkPlan",
                        principalColumn: "WorkPlanId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Call_ConsumerId",
                table: "Call",
                column: "ConsumerId");

            migrationBuilder.CreateIndex(
                name: "IX_Call_IncidentId",
                table: "Call",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_Equipment_IncidentId",
                table: "Equipment",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_Equipment_SafetyDocumentId",
                table: "Equipment",
                column: "SafetyDocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_Equipment_WorkRequestId",
                table: "Equipment",
                column: "WorkRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_Notification_IncidentId",
                table: "Notification",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_Notification_SafetyDocumentId",
                table: "Notification",
                column: "SafetyDocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_Notification_WorkPlanId",
                table: "Notification",
                column: "WorkPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_Notification_WorkRequestId",
                table: "Notification",
                column: "WorkRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPlan_IncidentId",
                table: "WorkPlan",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPlanEquipment_WorkPlanId",
                table: "WorkPlanEquipment",
                column: "WorkPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPlanSwitchingInstructions_WorkPlanId",
                table: "WorkPlanSwitchingInstructions",
                column: "WorkPlanId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Call");

            migrationBuilder.DropTable(
                name: "Crews");

            migrationBuilder.DropTable(
                name: "Equipment");

            migrationBuilder.DropTable(
                name: "IconSettings");

            migrationBuilder.DropTable(
                name: "Notification");

            migrationBuilder.DropTable(
                name: "NotificationTypesToDisplay");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "WorkPlanEquipment");

            migrationBuilder.DropTable(
                name: "WorkPlanSwitchingInstructions");

            migrationBuilder.DropTable(
                name: "Consumer");

            migrationBuilder.DropTable(
                name: "SafetyDocument");

            migrationBuilder.DropTable(
                name: "WorkRequests");

            migrationBuilder.DropTable(
                name: "WorkPlan");

            migrationBuilder.DropTable(
                name: "Incident");
        }
    }
}
