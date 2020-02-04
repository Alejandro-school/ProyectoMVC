using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class BookingInProcessController : Controller
    {
        // GET: BookingInProcess
        public ActionResult Index()
        {
            ViewBag.Title = "Reserva";
            ViewBag.PageName = "bookig-in-process";
            return View();
        }
    }
}