namespace MvcCarsHotels.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Chains",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Lines",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        ChainID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Chains", t => t.ChainID, cascadeDelete: true)
                .Index(t => t.ChainID);
            
            CreateTable(
                "dbo.Hotels",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        City = c.String(),
                        LineID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Lines", t => t.LineID, cascadeDelete: true)
                .Index(t => t.LineID);
            
            CreateTable(
                "dbo.HotelServices",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        HotelID = c.Int(nullable: false),
                        ServiceID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Hotels", t => t.HotelID, cascadeDelete: true)
                .ForeignKey("dbo.Services", t => t.ServiceID, cascadeDelete: true)
                .Index(t => t.HotelID)
                .Index(t => t.ServiceID);
            
            CreateTable(
                "dbo.Services",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Price = c.Single(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Rooms",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        RoomNumber = c.Int(nullable: false),
                        TypeOfBed = c.Int(nullable: false),
                        Price = c.Single(nullable: false),
                        AditionalBed = c.Boolean(nullable: false),
                        PersonNumber = c.Int(nullable: false),
                        HotelID = c.Int(nullable: false),
                        Reservation_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Hotels", t => t.HotelID, cascadeDelete: true)
                .ForeignKey("dbo.Reservations", t => t.Reservation_ID)
                .Index(t => t.HotelID)
                .Index(t => t.Reservation_ID);
            
            CreateTable(
                "dbo.RoomComodities",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        RoomID = c.Int(nullable: false),
                        ComodityID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Comodities", t => t.ComodityID, cascadeDelete: true)
                .ForeignKey("dbo.Rooms", t => t.RoomID, cascadeDelete: true)
                .Index(t => t.RoomID)
                .Index(t => t.ComodityID);
            
            CreateTable(
                "dbo.Comodities",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Clients",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Nacinality = c.String(nullable: false),
                        MethodOfPayment = c.String(),
                        RoomID = c.Int(nullable: false),
                        ReservationID = c.Int(nullable: false),
                        DNI = c.String(nullable: false),
                        Name = c.String(nullable: false, maxLength: 30),
                        Surname = c.String(nullable: false, maxLength: 50),
                        SecondSurname = c.String(nullable: false, maxLength: 50),
                        DateOfBirth = c.DateTime(nullable: false),
                        Phone = c.Int(nullable: false),
                        Email = c.String(nullable: false),
                        Direction = c.String(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Reservations", t => t.ReservationID, cascadeDelete: true)
                .ForeignKey("dbo.Rooms", t => t.RoomID, cascadeDelete: true)
                .Index(t => t.RoomID)
                .Index(t => t.ReservationID);
            
            CreateTable(
                "dbo.Reservations",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        City = c.String(nullable: false),
                        DateIn = c.DateTime(nullable: false),
                        DateOut = c.DateTime(nullable: false),
                        PersonNumber = c.Int(nullable: false),
                        Reservation_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Reservations", t => t.Reservation_ID)
                .Index(t => t.Reservation_ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Clients", "RoomID", "dbo.Rooms");
            DropForeignKey("dbo.Clients", "ReservationID", "dbo.Reservations");
            DropForeignKey("dbo.Rooms", "Reservation_ID", "dbo.Reservations");
            DropForeignKey("dbo.Reservations", "Reservation_ID", "dbo.Reservations");
            DropForeignKey("dbo.RoomComodities", "RoomID", "dbo.Rooms");
            DropForeignKey("dbo.RoomComodities", "ComodityID", "dbo.Comodities");
            DropForeignKey("dbo.Rooms", "HotelID", "dbo.Hotels");
            DropForeignKey("dbo.Hotels", "LineID", "dbo.Lines");
            DropForeignKey("dbo.HotelServices", "ServiceID", "dbo.Services");
            DropForeignKey("dbo.HotelServices", "HotelID", "dbo.Hotels");
            DropForeignKey("dbo.Lines", "ChainID", "dbo.Chains");
            DropIndex("dbo.Reservations", new[] { "Reservation_ID" });
            DropIndex("dbo.Clients", new[] { "ReservationID" });
            DropIndex("dbo.Clients", new[] { "RoomID" });
            DropIndex("dbo.RoomComodities", new[] { "ComodityID" });
            DropIndex("dbo.RoomComodities", new[] { "RoomID" });
            DropIndex("dbo.Rooms", new[] { "Reservation_ID" });
            DropIndex("dbo.Rooms", new[] { "HotelID" });
            DropIndex("dbo.HotelServices", new[] { "ServiceID" });
            DropIndex("dbo.HotelServices", new[] { "HotelID" });
            DropIndex("dbo.Hotels", new[] { "LineID" });
            DropIndex("dbo.Lines", new[] { "ChainID" });
            DropTable("dbo.Reservations");
            DropTable("dbo.Clients");
            DropTable("dbo.Comodities");
            DropTable("dbo.RoomComodities");
            DropTable("dbo.Rooms");
            DropTable("dbo.Services");
            DropTable("dbo.HotelServices");
            DropTable("dbo.Hotels");
            DropTable("dbo.Lines");
            DropTable("dbo.Chains");
        }
    }
}
