namespace vcskyfall.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddPost : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.LevelTypes",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        LevelName = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.Posts",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        Subject = c.String(),
                        Creater = c.String(),
                        Deleted = c.Boolean(),
                        TimeStamp = c.DateTime(nullable: false),
                        Content = c.String(),
                        Level = c.Int(nullable: false),
                        LevelType_id = c.Int(),
                    })
                .PrimaryKey(t => t.id)
                .ForeignKey("dbo.LevelTypes", t => t.LevelType_id)
                .Index(t => t.LevelType_id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Posts", "LevelType_id", "dbo.LevelTypes");
            DropIndex("dbo.Posts", new[] { "LevelType_id" });
            DropTable("dbo.Posts");
            DropTable("dbo.LevelTypes");
        }
    }
}
