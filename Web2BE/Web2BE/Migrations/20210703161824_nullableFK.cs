using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2BE.Migrations
{
    public partial class nullableFK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Call_Consumer_ConsumerId",
                table: "Call");

            migrationBuilder.DropForeignKey(
                name: "FK_Notification_SafetyDocument_SafetyDocumentId",
                table: "Notification");

            migrationBuilder.DropForeignKey(
                name: "FK_Notification_WorkPlan_WorkPlanId",
                table: "Notification");

            migrationBuilder.AlterColumn<int>(
                name: "WorkPlanId",
                table: "Notification",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "SafetyDocumentId",
                table: "Notification",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "IncdidentId",
                table: "Notification",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ConsumerId",
                table: "Call",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Call_Consumer_ConsumerId",
                table: "Call",
                column: "ConsumerId",
                principalTable: "Consumer",
                principalColumn: "ConsumerId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Notification_SafetyDocument_SafetyDocumentId",
                table: "Notification",
                column: "SafetyDocumentId",
                principalTable: "SafetyDocument",
                principalColumn: "SafetyDocumentId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Notification_WorkPlan_WorkPlanId",
                table: "Notification",
                column: "WorkPlanId",
                principalTable: "WorkPlan",
                principalColumn: "WorkPlanId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Call_Consumer_ConsumerId",
                table: "Call");

            migrationBuilder.DropForeignKey(
                name: "FK_Notification_SafetyDocument_SafetyDocumentId",
                table: "Notification");

            migrationBuilder.DropForeignKey(
                name: "FK_Notification_WorkPlan_WorkPlanId",
                table: "Notification");

            migrationBuilder.AlterColumn<int>(
                name: "WorkPlanId",
                table: "Notification",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SafetyDocumentId",
                table: "Notification",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "IncdidentId",
                table: "Notification",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ConsumerId",
                table: "Call",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Call_Consumer_ConsumerId",
                table: "Call",
                column: "ConsumerId",
                principalTable: "Consumer",
                principalColumn: "ConsumerId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notification_SafetyDocument_SafetyDocumentId",
                table: "Notification",
                column: "SafetyDocumentId",
                principalTable: "SafetyDocument",
                principalColumn: "SafetyDocumentId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notification_WorkPlan_WorkPlanId",
                table: "Notification",
                column: "WorkPlanId",
                principalTable: "WorkPlan",
                principalColumn: "WorkPlanId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
