import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { notificationTypesDisplayed } from 'src/assets/notificationTypesDisplayed.enum';

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
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }
  AddStreetPriority(){
    alert("street prio alert");
  }
  onSubmit(settings: any){
    alert("succesful changes");
  }
  

  resetSettingsForm(){
    this.settingsForm.reset();
  }
}
