using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class CochesController : Controller
    {
        // GET: Coches
        public ActionResult Index()
        {
            ViewBag.Title = "Coches";
            ViewBag.PageName = "coches";
            return View();
        }
    }
}