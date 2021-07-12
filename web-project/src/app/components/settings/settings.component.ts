import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { AddressService } from 'src/app/services/address.service';
import { IconService } from 'src/app/services/icon.service';
import { UserService } from 'src/app/services/user.service';
import { notificationTypesDisplayed } from 'src/assets/notificationTypesDisplayed.enum';
import { DataTableIconSettingsComponent, DataTableIconSettingsItem } from '../data-tables/data-table-icon-settings/data-table-icon-settings.component';
import { User } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public notificationTypesDisplayed = Object.values(notificationTypesDisplayed); 
  userType: string = "";
  comparePasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password').value;
    let passwordRepeat = group.get('passwordRepeat').value;
    return pass === passwordRepeat ? null : { notSame: true}
  }
  passwordsForm = this.formBuilder.group({
    oldPassword: '',
    passwords: this.formBuilder.group({
      password: ['',[Validators.minLength(4)]],
      passwordRepeat: '',
    }, {validator: this.comparePasswords}), 
    settings: this.formBuilder.group({
      hideUnnecesaryFields: false,
      notificationDisplay: notificationTypesDisplayed.All
    }),
    addresses: this.formBuilder.group({
      address: "",
      priority: ""
    })
  });   

  id: any;
  icons: Map<number, DataTableIconSettingsItem>;
  korisnik: any;
  constructor(private formBuilder: FormBuilder, private iconSettingsService: IconService, private userService: UserService
    ,private addressService: AddressService) {
    this.icons = new Map<number, DataTableIconSettingsItem>();
    this.id = localStorage.getItem('id');
    this.userService.getUser(this.id).subscribe(data => {this.korisnik = data; this.userType = this.korisnik.userTypes;console.log(this.korisnik)})
   }

  ngOnInit(): void {
  }
  AddStreetPriority(){
    alert("street prio alert");
  }
  onSubmit(){
    this.icons.forEach(icon => {
      this.iconSettingsService.putIconSettings(icon,icon.iconSettingsId)
      .subscribe();
    });
    if( this.passwordsForm.value.passwords.password != ""){
      let user: any;
      this.userService.getUser(this.id).subscribe(data => {
        user=data;
        user.password = this.passwordsForm.value.passwords.password;
        this.userService.putUser(this.id, user).subscribe();
      });
    }
    localStorage.setItem('displayUnnecesaryFields', this.passwordsForm.value.settings.hideUnnecesaryFields);
    localStorage.setItem('notificationDisplay', this.passwordsForm.value.settings.notificationDisplay);
   
    if(this.passwordsForm.value.addresses.address != "" && this.passwordsForm.value.addresses.priority != ""){
      let address: AddressPriority = {
        address: this.passwordsForm.value.addresses.address,
        addressId: 0,
        priority: this.passwordsForm.value.addresses.priority
      }
      console.log(address);
      this.addressService.postAddress(address).subscribe();
    }
    
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
    this.passwordsForm.reset();
  }
}
export interface AddressPriority{
  priority: string,
  address: string,
  addressId: number
}