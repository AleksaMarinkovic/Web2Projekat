using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2BE.Migrations
{
    public partial class fixes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "WorkRequestId",
                table: "Notification",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IconType",
                table: "IconSettings",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "WorkRequest",
                columns: table => new
                {
                    WorkRequestId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkRequest", x => x.WorkRequestId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Notification_WorkRequestId",
                table: "Notification",
                column: "WorkRequestId");

            migrationBuilder.AddForeignKey(
                name: "FK_Notification_WorkRequest_WorkRequestId",
                table: "Notification",
                column: "WorkRequestId",
                principalTable: "WorkRequest",
                principalColumn: "WorkRequestId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Notification_WorkRequest_WorkRequestId",
                table: "Notification");

            migrationBuilder.DropTable(
                name: "WorkRequest");

            migrationBuilder.DropIndex(
                name: "IX_Notification_WorkRequestId",
                table: "Notification");

            migrationBuilder.DropColumn(
                name: "WorkRequestId",
                table: "Notification");

            migrationBuilder.DropColumn(
                name: "IconType",
                table: "IconSettings");
        }
    }
}
