using file.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace file.Controllers
{
    public class HomeController : Controller
    {
        MVCEntities obj = new MVCEntities();
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Index(HttpPostedFileBase file)
        {

            string fileName = Path.GetFileName(file.FileName);
            string path = Path.Combine(Server.MapPath("~/Img"), fileName);

            file.SaveAs(path);
            ViewBag.path = path;
            return View();
        }
    }
}