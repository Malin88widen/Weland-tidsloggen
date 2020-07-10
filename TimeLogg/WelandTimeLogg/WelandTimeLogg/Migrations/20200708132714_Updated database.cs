using Microsoft.EntityFrameworkCore.Migrations;

namespace WelandTimeLogg.Migrations
{
    public partial class Updateddatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "description",
                table: "ActivityLogEntries",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "project",
                table: "ActivityLogEntries",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "description",
                table: "ActivityLogEntries");

            migrationBuilder.DropColumn(
                name: "project",
                table: "ActivityLogEntries");
        }
    }
}
