using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcCarsHotels.Models
{
    public class Line
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int ChainID { get; set; }
        public Chain Chain { get; set; }
        public IList<Hotel> Hotels { get; set; }
    }
}