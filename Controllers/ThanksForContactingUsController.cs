using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class ThanksForContactingUsController : Controller
    {
        // GET: ThanksForContactingUs
        public ActionResult Index()
        {
            ViewBag.Title = "Thanks";
            ViewBag.PageName = "thanks-for-contacting-us";
            return View();
        }
    }
}