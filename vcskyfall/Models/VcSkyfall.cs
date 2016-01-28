using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace vcskyfall.Models
{
    public class VcSkyfall : DbContext
    {
        public DbSet<LevelType> LevelTypes { get; set; }
        public DbSet<Post> Posts { get; set; }
    }
}