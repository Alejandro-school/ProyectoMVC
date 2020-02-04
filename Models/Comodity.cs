using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcCarsHotels.Models
{
    public class Comodity
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public IList<RoomComodity> RoomComodities { get; set; }
    }
}