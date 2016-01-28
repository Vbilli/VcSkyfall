
using System.ComponentModel.DataAnnotations;


namespace vcskyfall.Models
{
    public class LevelType
    {
        [Key]
        [Required]
        public int id { get; set; }
        public string LevelName { get; set; }
    }
}