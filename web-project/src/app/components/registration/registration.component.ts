import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {userTypes} from "../../../assets/userTypes.enum";
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  imageURL: string = "../../../assets/images/PROFILE.png";

  comparePasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password').value;
    let passwordRepeat = group.get('passwordRepeat').value;
    return pass === passwordRepeat ? null : { notSame: true}
  }
  public userTypes = Object.values(userTypes);
  registrationForm = this.formBuilder.group({
    username : ['', Validators.required],
    email: ['',Validators.email],
    passwords: this.formBuilder.group({
      password: ['',[Validators.required, Validators.minLength(4)]],
      passwordRepeat: ['', Validators.required],
    }, {validator: this.comparePasswords}),    
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    dateOfBirth: ['',Validators.required],
    address: ['',Validators.required],
    type: userTypes.CrewMember,     
    photo: ""
  });
  constructor(private formBuilder: FormBuilder, private userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    var user = {
      username : this.registrationForm.value.username,
      email : this.registrationForm.value.email,
      password : this.registrationForm.value.passwords.password,
      firstName : this.registrationForm.value.firstName,
      lastName : this.registrationForm.value.lastName,
      dateOfBirth : this.registrationForm.value.dateOfBirth,
      address : this.registrationForm.value.address,
      userTypes : this.registrationForm.value.type,
      photo : this.registrationForm.value.photo,
    }
    this.userService.register(user).subscribe();
    this._router.navigate(['/']);
    
  }
  showPreview(event: any) {
    const file = (event.target as HTMLInputElement).files[0];

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
}
