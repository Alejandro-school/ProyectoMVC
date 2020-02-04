using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MvcCarsHotels.Models
{
    public class Client : Person
    {
        public new int ID { get; set; }
        [Required]
        public string Nacinality { get; set; }
        public string MethodOfPayment { get; set; }
        public int RoomID { get; set; }
        public Room Room { get; set; }
        public int ReservationID { get; set; }
        public Reservation Reservation { get; set; }
    }
}