using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace vcskyfall.Models
{
  public class Post
    {
        [Key]
        [Required]
        public int id { get; set; }
        public string Subject { get; set; }
        public string Creater { get; set; }
        public bool? Deleted { get; set; }
        public string Tittle { get; set; }
        public DateTime TimeStamp { get; set; }
        public string PicturePath { get; set; }
        public string Content { get; set;  }
        public int Level { get; set; }
        public virtual LevelType LevelType { get; set; }
    }
}