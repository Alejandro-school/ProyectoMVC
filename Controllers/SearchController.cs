using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class SearchController : Controller
    {
        // GET: Search
        public ActionResult Index()
        {
            ViewBag.Title = "Busqueda";
            ViewBag.PageName = "search";
            return View();
        }
    }
}