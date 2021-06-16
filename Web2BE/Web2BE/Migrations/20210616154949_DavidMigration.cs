using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2BE.Migrations
{
    public partial class DavidMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Picture",
                table: "Users",
                newName: "Photo");

            migrationBuilder.CreateTable(
                name: "Consumer",
                columns: table => new
                {
                    ConsumerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Priority = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AccountType = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consumer", x => x.ConsumerId);
                });

            migrationBuilder.CreateTable(
                name: "IconSettings",
                columns: table => new
                {
                    IconSettingsId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Icon = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IconSettings", x => x.IconSettingsId);
                });

            migrationBuilder.CreateTable(
                name: "Incident",
                columns: table => new
                {
                    IncidentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incident", x => x.IncidentId);
                });

            migrationBuilder.CreateTable(
                name: "SafetyDocument",
                columns: table => new
                {
                    SafetyDocumentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SafetyDocument", x => x.SafetyDocumentId);
                });

            migrationBuilder.CreateTable(
                name: "WorkPlan",
                columns: table => new
                {
                    WorkPlanId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DocumentType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IncdidentId = table.Column<int>(type: "int", nullable: false),
                    IncidentId = table.Column<int>(type: "int", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkRequest = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StartWorkDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EndWorkDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreationDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Company = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Purpose = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Crew = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastEditor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EditedDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DocumentState = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Photo = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkPlan", x => x.WorkPlanId);
                    table.ForeignKey(
                        name: "FK_WorkPlan_Incident_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incident",
                        principalColumn: "IncidentId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Notification",
                columns: table => new
                {
                    NotificationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NotificationType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Read = table.Column<bool>(type: "bit", nullable: false),
                    TimeStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IncdidentId = table.Column<int>(type: "int", nullable: false),
                    IncidentId = table.Column<int>(type: "int", nullable: true),
                    SafetyDocumentId = table.Column<int>(type: "int", nullable: false)
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
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkPlanEquipment",
                columns: table => new
                {
                    WorkPlanEquipmentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EquipmentType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Coordinates = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkPlanId = table.Column<int>(type: "int", nullable: false)
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
                    WorkPlanSwitchingInstructionstId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Element = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkPlanId = table.Column<int>(type: "int", nullable: false)
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
                name: "IX_Notification_IncidentId",
                table: "Notification",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_Notification_SafetyDocumentId",
                table: "Notification",
                column: "SafetyDocumentId");

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
                name: "Consumer");

            migrationBuilder.DropTable(
                name: "IconSettings");

            migrationBuilder.DropTable(
                name: "Notification");

            migrationBuilder.DropTable(
                name: "WorkPlanEquipment");

            migrationBuilder.DropTable(
                name: "WorkPlanSwitchingInstructions");

            migrationBuilder.DropTable(
                name: "SafetyDocument");

            migrationBuilder.DropTable(
                name: "WorkPlan");

            migrationBuilder.DropTable(
                name: "Incident");

            migrationBuilder.RenameColumn(
                name: "Photo",
                table: "Users",
                newName: "Picture");
        }
    }
}
