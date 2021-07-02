using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2BE.Migrations
{
    public partial class quickFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AccountType",
                table: "Consumer",
                newName: "ConsumerType");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ConsumerType",
                table: "Consumer",
                newName: "AccountType");
        }
    }
}
