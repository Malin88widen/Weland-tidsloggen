using Microsoft.EntityFrameworkCore.Migrations;

namespace WelandTimeLogg.Migrations
{
    public partial class UpdatedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "selectListName",
                table: "ActivityLogEntries",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "selectListName",
                table: "ActivityLogEntries");
        }
    }
}
