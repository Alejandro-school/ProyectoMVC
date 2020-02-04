using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class AboutController : Controller
    {
        // GET: Aout
        public ActionResult Index()
        {
            ViewBag.Title = "Qui som?";
            ViewBag.PageName = "about";
            return View();
        }
    }
}