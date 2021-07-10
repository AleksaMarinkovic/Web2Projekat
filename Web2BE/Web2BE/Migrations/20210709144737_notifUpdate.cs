using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2BE.Migrations
{
    public partial class notifUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NotificationType",
                table: "Notification");

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Notification",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "Notification");

            migrationBuilder.AddColumn<string>(
                name: "NotificationType",
                table: "Notification",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
