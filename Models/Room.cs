using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcCarsHotels.Models
{
    public class Room
    {
        public int ID { get; set; }
        public int RoomNumber { get; set; }
        public int TypeOfBed { get; set; }
        public float Price { get; set; }
        public bool AditionalBed { get; set; }
        public int PersonNumber { get; set; }
        public int HotelID { get; set; }
        public Hotel Hotel { get; set; }
        public IList<RoomComodity> RoomComodities { get; set; }
    }
}