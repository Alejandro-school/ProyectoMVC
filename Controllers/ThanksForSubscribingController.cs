using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto_Frontend_5.Controllers
{
    public class ThanksForSubscribingController : Controller
    {
        // GET: ThanksForSubscribing
        public ActionResult Index()
        {
            ViewBag.Title = "Subscripcion";
            ViewBag.PageName = "thanks-for-subscribing";
            return View();
        }
    }
}