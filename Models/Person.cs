using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MvcCarsHotels.Models
{
    public abstract class Person
    {
        public int ID { get; set; }
        [Required]
        [Display(Name = "DNI")]
        public string DNI { get; set; }
        [Required]
        [StringLength(30)]
        [Display(Name = "Name")]
        public string Name { get; set; }
        [Required]
        [StringLength(50)]
        [Display(Name = "Surname")]
        public string Surname { get; set; }
        [Required]
        [StringLength(50)]
        [Display(Name = "SecondSurname")]
        public string SecondSurname { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public int Phone { get; set; }
        [Required]
        public string Email { get; set; }
        public string Direction { get; set; }
    }
}