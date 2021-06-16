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
        public string NotificationType { get; set; }
        public string Description { get; set; }
        public bool Read { get; set; }
        public string TimeStamp { get; set; }

        public int IncdidentId { get; set; }
        public Incident Incident { get; set; }

        public int SafetyDocumentId { get; set; }
        public SafetyDocument SafetyDocument { get; set; }
    }
}
