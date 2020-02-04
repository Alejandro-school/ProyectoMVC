using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class PersonalDataUsageController : Controller
    {
        // GET: PersonalDataUsage
        public ActionResult Index()
        {
            ViewBag.Title = "Datos";
            ViewBag.PageName = "personal.data-usage";
            return View();
        }
    }
}