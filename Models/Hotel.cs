using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MvcCarsHotels.Models
{
    public class Hotel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public int LineID { get; set; }
        public Line Line { get; set; }
        public IList<Room> Rooms { get; set; }
        public IList<HotelService> HotelServices { get; set; }
    }
}