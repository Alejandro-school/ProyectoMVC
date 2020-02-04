using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcCarsHotels.Models
{
    public class Service
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public IList<HotelService> HotelServices { get; set; }
    }
}