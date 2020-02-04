using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class BookingCompletedController : Controller
    {
        // GET: BookingCompleted
        public ActionResult Index()
        {
            ViewBag.Title = "Reserva";
            ViewBag.PageName = "booking-completed";
            return View();
        }
    }
}