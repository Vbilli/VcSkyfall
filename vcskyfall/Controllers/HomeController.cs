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
        public int Take = 3;
        
        public ActionResult Index()
        {
            using (var db = new VcSkyfall())
            {
                var query = (from p
                             in db.Posts
                             orderby p.TimeStamp
                             descending
                             select p)
                             .Take(3)
                             .ToArray();
                Post[] posts = query;

                return View(posts);
            }
        }
        public ActionResult create()
        {
            return View();
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
        [HttpGet]
        public ActionResult SamplePost(int id)
        {
            using (var db = new VcSkyfall())
            {
                Post article = new Post();
                var query = (from p
                             in db.Posts
                             where p.id == id
                             orderby p.TimeStamp
                             descending
                             select p
                             ).FirstOrDefault();
                //article.Content = query.Content;
                //article.Creater
                article = query;
                return View(query);
            }

        }
        public JsonResult AjaxMoreArcticle(int number)
        {
            using (var db = new VcSkyfall())
            {
                var jsonResult = new Dictionary<int, object[]>();
                var PostQuery = (from p
                            in db.Posts
                             orderby p.TimeStamp
                             descending
                             select p)
                             .Skip(number)
                            .Take(Take)
                            .ToArray();
                var json = Array.ConvertAll(PostQuery, query => new
                {
                    id=query.id,
                    Creater = query.Creater,
                    Content = query.Content,
                    PicturePath = query.PicturePath,
                    TimeStamp = query.TimeStamp,
                    Subject = query.Subject,
                    Tittle = query.Tittle
                });
                //for (int i = 0; i < Take; i++)
                //{
                //    jsonResult.Add(i, json);
                //}


                return Json(json);
            }
        }
    }
}