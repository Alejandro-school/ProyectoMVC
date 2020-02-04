using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MvcCarsHotels.Data;
using MvcCarsHotels.Models;

namespace MvcCarsHotels.Controllers
{
    public class ChainsController : Controller
    {
        private MvcCarsHotelsContext db = new MvcCarsHotelsContext();

        // GET: Chains
        public ActionResult Index()
        {
            return View(db.Chains.ToList());
        }

        // GET: Chains/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Chain chain = db.Chains.Find(id);
            if (chain == null)
            {
                return HttpNotFound();
            }
            return View(chain);
        }

        // GET: Chains/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Chains/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Name")] Chain chain)
        {
            if (ModelState.IsValid)
            {
                db.Chains.Add(chain);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(chain);
        }

        // GET: Chains/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Chain chain = db.Chains.Find(id);
            if (chain == null)
            {
                return HttpNotFound();
            }
            return View(chain);
        }

        // POST: Chains/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Name")] Chain chain)
        {
            if (ModelState.IsValid)
            {
                db.Entry(chain).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(chain);
        }

        // GET: Chains/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Chain chain = db.Chains.Find(id);
            if (chain == null)
            {
                return HttpNotFound();
            }
            return View(chain);
        }

        // POST: Chains/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Chain chain = db.Chains.Find(id);
            db.Chains.Remove(chain);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
