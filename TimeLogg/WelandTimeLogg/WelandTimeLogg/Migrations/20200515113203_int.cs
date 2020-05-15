using Microsoft.EntityFrameworkCore.Migrations;

namespace WelandTimeLogg.Migrations
{
    public partial class @int : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ActivityLastedHours",
                table: "ActivityLogEntries",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ActivityLastedHours",
                table: "ActivityLogEntries");
        }
    }
}
