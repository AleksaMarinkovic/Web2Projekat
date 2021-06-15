using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2BE.Models
{
    public class Notification
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int NotificationId { get; set; }
        //FK needed prolly on smth
        public string NotificationType { get; set; }
        //FK from incidend description needed
        public string Description { get; set; }
        public bool Read { get; set; }
        public string TimeStamp { get; set; }
    }
}
