import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { IconService } from 'src/app/services/icon.service';
import { notificationTypesDisplayed } from 'src/assets/notificationTypesDisplayed.enum';
import { DataTableIconSettingsComponent, DataTableIconSettingsItem } from '../data-tables/data-table-icon-settings/data-table-icon-settings.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public notificationTypesDisplayed = Object.values(notificationTypesDisplayed);  
  settingsForm = this.formBuilder.group({    
    oldPassword: "",
    password: "",
    passwordRepeat: "",
    streetPriority: "",
    iconDisplay: "",
    hideUnnecesaryDocumentInfo: "",
    notificationTypesDisplayed: notificationTypesDisplayed,
  });
  icons: Map<number, DataTableIconSettingsItem>;
  constructor(private formBuilder: FormBuilder, private iconSettingsService: IconService) {
    this.icons = new Map<number, DataTableIconSettingsItem>();
   }

  ngOnInit(): void {
  }
  AddStreetPriority(){
    alert("street prio alert");
  }
  onSubmit(settings: any){
    this.icons.forEach(icon => {
      this.iconSettingsService.putIconSettings(icon,icon.iconSettingsId)
      .subscribe();
    });

    
  }
  iconSettingsEmmiter(event: any) {
    console.warn(event.icon);
    //loads icon data to be submited, if a previous version exists,it delets it.
    if(this.icons.has(event.iconSettingsId)){
      this.icons.delete(event.iconSettingsId);
    }
    this.icons.set(event.iconSettingsId, event);
  }

  resetSettingsForm(){
    this.settingsForm.reset();
  }
}
