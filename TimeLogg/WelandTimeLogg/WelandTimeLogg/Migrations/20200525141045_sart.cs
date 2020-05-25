using Microsoft.EntityFrameworkCore.Migrations;

namespace WelandTimeLogg.Migrations
{
    public partial class sart : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_activityLogSmalls",
                table: "activityLogSmalls");

            migrationBuilder.RenameTable(
                name: "activityLogSmalls",
                newName: "ActivityLogSmall");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ActivityLogSmall",
                table: "ActivityLogSmall",
                column: "id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ActivityLogSmall",
                table: "ActivityLogSmall");

            migrationBuilder.RenameTable(
                name: "ActivityLogSmall",
                newName: "activityLogSmalls");

            migrationBuilder.AddPrimaryKey(
                name: "PK_activityLogSmalls",
                table: "activityLogSmalls",
                column: "id");
        }
    }
}
