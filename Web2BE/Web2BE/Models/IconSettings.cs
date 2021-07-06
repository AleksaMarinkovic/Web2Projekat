﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2BE.Models
{
    public class IconSettings
    {
        public int IconSettingsId { get; set; }
        public string IconType { get; set; }
        public string Icon { get; set; }
    }
}
