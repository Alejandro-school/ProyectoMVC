using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class RoomController : Controller
    {
        // GET: Room
        public ActionResult Index()
        {
            ViewBag.Title = "Habitaciones";
            ViewBag.PageName = "room";
            return View();
        }
    }
}