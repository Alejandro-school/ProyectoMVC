using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class HotelController : Controller
    {
        // GET: Hotel
        public ActionResult Index()
        {
            ViewBag.Title = "Hotel";
            ViewBag.PageName = "hotel";
            return View();
        }
    }
}