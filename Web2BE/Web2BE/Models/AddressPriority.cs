﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2BE.Models
{
    public class AddressPriority
    {
        [Key]
        public int AddressId { get; set; }
        public string Address { get; set; }
        public string Priority { get; set; }
    }
}
