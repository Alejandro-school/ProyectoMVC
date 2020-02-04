using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class PromocionesController : Controller
    {
        // GET: Promociones
        public ActionResult Index()
        {
            ViewBag.Title = "Promociones";
            ViewBag.PageName = "promociones";
            return View();
        }
    }
}