using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2BE.Models
{
    public class NotificationTypesToDisplay
    {
        [Key]//The idea is to store from settings to here and use that as a query for notiftypes as a filter to show only those notifications!
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int NotificationTypesToDisplayId { get; set; }
        public string NotificationTypeToDisplay { get; set; }
    }
}
