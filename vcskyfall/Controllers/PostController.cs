using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using vcskyfall.Models;

namespace vcskyfall.Controllers
{
    public class PostController : Controller
    {
        // GET: Post
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult CreatePost()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        [ValidateInput(false)]
        public ActionResult CreatePost(Post post)
        {
            if (ModelState.IsValid)
            {
                using (var db = new VcSkyfall())
                {
                    try
                    {
                        db.Posts.Add(new Post
                        {
                            Tittle = post.Tittle,
                            TimeStamp = System.DateTime.Now,
                            Creater = User.Identity.Name,
                            Content = post.Content,
                            Deleted = false,
                            Subject = post.Subject,
                            Level = 1
                        });
                        db.SaveChanges();
                        return RedirectToAction("Index","Home");
                    }
                    catch (Exception e)
                    {
                        ModelState.AddModelError(string.Empty, e.Message);
                        return View(post);
                    }
                }
            }
            else
            {
                return View(post);
            }
            
        }
    }
}