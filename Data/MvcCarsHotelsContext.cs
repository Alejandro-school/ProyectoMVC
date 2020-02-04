using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MvcCarsHotels.Data
{
    public class MvcCarsHotelsContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public MvcCarsHotelsContext() : base("name=MvcCarsHotelsContext")
        {
        }

        public System.Data.Entity.DbSet<MvcCarsHotels.Models.Chain> Chains { get; set; }

        public System.Data.Entity.DbSet<MvcCarsHotels.Models.Client> Clients { get; set; }

        public System.Data.Entity.DbSet<MvcCarsHotels.Models.Reservation> Reservations { get; set; }

        public System.Data.Entity.DbSet<MvcCarsHotels.Models.Room> Rooms { get; set; }

        public System.Data.Entity.DbSet<MvcCarsHotels.Models.Comodity> Comodities { get; set; }

        public System.Data.Entity.DbSet<MvcCarsHotels.Models.Hotel> Hotels { get; set; }

        public System.Data.Entity.DbSet<MvcCarsHotels.Models.Line> Lines { get; set; }

        public System.Data.Entity.DbSet<MvcCarsHotels.Models.Service> Services { get; set; }
    }
}
