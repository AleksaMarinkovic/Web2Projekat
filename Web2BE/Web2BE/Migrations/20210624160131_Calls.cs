using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2BE.Migrations
{
    public partial class Calls : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "AllTagsRemoved",
                table: "SafetyDocument",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "AllWorkOperationsCompleted",
                table: "SafetyDocument",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "DateCreated",
                table: "SafetyDocument",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DateEdited",
                table: "SafetyDocument",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Details",
                table: "SafetyDocument",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DocImage",
                table: "SafetyDocument",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "GroundingRemoved",
                table: "SafetyDocument",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "LastEditor",
                table: "SafetyDocument",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "SafetyDocument",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "SafetyDocument",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "ReadyForService",
                table: "SafetyDocument",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "State",
                table: "SafetyDocument",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "SafetyDocument",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "WorkPlanId",
                table: "Notification",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Call",
                columns: table => new
                {
                    CallId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ConsumerId = table.Column<int>(type: "int", nullable: false),
                    Reason = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HazardName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HazardPriority = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Call", x => x.CallId);
                    table.ForeignKey(
                        name: "FK_Call_Consumer_ConsumerId",
                        column: x => x.ConsumerId,
                        principalTable: "Consumer",
                        principalColumn: "ConsumerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Notification_WorkPlanId",
                table: "Notification",
                column: "WorkPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_Call_ConsumerId",
                table: "Call",
                column: "ConsumerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Notification_WorkPlan_WorkPlanId",
                table: "Notification",
                column: "WorkPlanId",
                principalTable: "WorkPlan",
                principalColumn: "WorkPlanId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Notification_WorkPlan_WorkPlanId",
                table: "Notification");

            migrationBuilder.DropTable(
                name: "Call");

            migrationBuilder.DropIndex(
                name: "IX_Notification_WorkPlanId",
                table: "Notification");

            migrationBuilder.DropColumn(
                name: "AllTagsRemoved",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "AllWorkOperationsCompleted",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "DateCreated",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "DateEdited",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "Details",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "DocImage",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "GroundingRemoved",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "LastEditor",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "Notes",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "ReadyForService",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "State",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "SafetyDocument");

            migrationBuilder.DropColumn(
                name: "WorkPlanId",
                table: "Notification");
        }
    }
}
