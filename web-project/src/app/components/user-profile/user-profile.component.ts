import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {userTypes} from "../../../assets/userTypes.enum";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userTypes = Object.values(userTypes);
  userProfileForm = this.formBuilder.group({
    username :"",
    email: "",
    password: "",
    passwordRepeat: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address:"",
    type: userTypes,        
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    window.alert("Finito");
  }
}
