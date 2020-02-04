using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MvcCarsHotels.Models
{
    public class Reservation
    {
        public int ID { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime DateIn { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime DateOut { get; set; }
        [Required]
        public int PersonNumber { get; set; }
        public IList<Reservation> Reservations { get; set; }
        public IList<Room> Rooms { get; set; }
    }
}