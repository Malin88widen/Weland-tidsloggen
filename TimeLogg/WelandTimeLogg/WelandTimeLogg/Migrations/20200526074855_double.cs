using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WelandTimeLogg.Migrations
{
    public partial class @double : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ActivityLogSmall");

            migrationBuilder.AlterColumn<decimal>(
                name: "hours",
                table: "ActivityLogEntries",
                type: "decimal(8,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(8)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "hours",
                table: "ActivityLogEntries",
                type: "decimal(8)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(8,2)");

            migrationBuilder.CreateTable(
                name: "ActivityLogSmall",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    createdNow = table.Column<DateTime>(type: "datetime2", nullable: false),
                    hour = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActivityLogSmall", x => x.id);
                });
        }
    }
}
