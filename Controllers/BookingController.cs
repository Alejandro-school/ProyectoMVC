using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class BookingController : Controller
    {
        // GET: Booking
        public ActionResult Index()
        {
            ViewBag.Title = "Reserva";
            ViewBag.PageName = "booking";
            return View();
        }
    }
}