using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2BE.Migrations
{
    public partial class syntaxFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkPlan_Incident_IncidentId",
                table: "WorkPlan");

            migrationBuilder.DropColumn(
                name: "IncdidentId",
                table: "WorkPlan");

            migrationBuilder.AlterColumn<int>(
                name: "IncidentId",
                table: "WorkPlan",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkPlan_Incident_IncidentId",
                table: "WorkPlan",
                column: "IncidentId",
                principalTable: "Incident",
                principalColumn: "IncidentId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkPlan_Incident_IncidentId",
                table: "WorkPlan");

            migrationBuilder.AlterColumn<int>(
                name: "IncidentId",
                table: "WorkPlan",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "IncdidentId",
                table: "WorkPlan",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkPlan_Incident_IncidentId",
                table: "WorkPlan",
                column: "IncidentId",
                principalTable: "Incident",
                principalColumn: "IncidentId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
