using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using vcskyfall.Models;

namespace vcskyfall.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            using (var db = new VcSkyfall())
            {
                var query = (from p 
                             in db.Posts
                             orderby p.TimeStamp 
                             descending
                             select p)
                             .Take(3);
            
            return View(query);
            }
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult SamplePost()
        {
            return View();
        }
    }
}