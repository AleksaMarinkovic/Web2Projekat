import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';
import { DataTableIconSettingsComponent, DataTableIconSettingsItem } from '../data-tables/data-table-icon-settings/data-table-icon-settings.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public navbarCollapsed = true;
  constructor(private iconSettingService: IconService, private _router: Router) { }
  images: DataTableIconSettingsItem[];
  iconMap = new Map();
  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(){
    this.iconSettingService.getAllIconSettings().subscribe(
      data => {
        this.images = data;
        this.images.forEach(element => {
          this.iconMap.set(element.iconType, element.icon);          
        });
      }
    )
  }
  logOut(){
    localStorage.removeItem("jwt");
    this._router.navigate(['/']);
  }
}
