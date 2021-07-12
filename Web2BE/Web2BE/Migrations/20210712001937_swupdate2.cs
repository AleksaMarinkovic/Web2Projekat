using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2BE.Migrations
{
    public partial class swupdate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkPlanSwitchingInstructions_WorkPlan_WorkPlanId",
                table: "WorkPlanSwitchingInstructions");

            migrationBuilder.AlterColumn<int>(
                name: "WorkPlanId",
                table: "WorkPlanSwitchingInstructions",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkPlanSwitchingInstructions_WorkPlan_WorkPlanId",
                table: "WorkPlanSwitchingInstructions",
                column: "WorkPlanId",
                principalTable: "WorkPlan",
                principalColumn: "WorkPlanId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkPlanSwitchingInstructions_WorkPlan_WorkPlanId",
                table: "WorkPlanSwitchingInstructions");

            migrationBuilder.AlterColumn<int>(
                name: "WorkPlanId",
                table: "WorkPlanSwitchingInstructions",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkPlanSwitchingInstructions_WorkPlan_WorkPlanId",
                table: "WorkPlanSwitchingInstructions",
                column: "WorkPlanId",
                principalTable: "WorkPlan",
                principalColumn: "WorkPlanId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
