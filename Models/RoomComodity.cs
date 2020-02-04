using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcCarsHotels.Models
{
    public class RoomComodity
    {
        public int ID { get; set; }
        public int RoomID { get; set; }
        public Room Room { get; set; }
        public int ComodityID { get; set; }
        public Comodity Comodity { get; set; }
                
    }
}