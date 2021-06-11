import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {userTypes} from "../../../assets/userTypes.enum";

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public userTypes = Object.values(userTypes);
  registrationForm = this.formBuilder.group({
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
    window.alert("Register!");
  }
}
