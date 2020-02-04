using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcCarsHotels.Models
{
    public class HotelService
    {
        public int ID { get; set; }
        public int HotelID { get; set; }
        public Hotel Hotel { get; set; }
        public int ServiceID { get; set; }
        public Service Service { get; set; }
    }
}