using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class CookieUsageController : Controller
    {
        // GET: CookieUsage
        public ActionResult Index()
        {
            ViewBag.Title = "Cookies";
            ViewBag.PageName = "cookie-usage";
            return View();
        }
    }
}