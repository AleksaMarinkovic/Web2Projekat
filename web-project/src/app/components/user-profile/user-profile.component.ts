import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import { UserService } from 'src/app/services/user.service';
import {userTypes} from "../../../assets/userTypes.enum";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  comparePasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password').value;
    let passwordRepeat = group.get('passwordRepeat').value;
    return pass === passwordRepeat ? null : { notSame: true}
  }
  public userTypes = Object.values(userTypes);
  userProfileForm = this.formBuilder.group({
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
  user: any;
  id : any;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.id = localStorage.getItem('id');
    this.userService.getUser(this.id).subscribe( data => {this.user = data;     console.log(this.user)});
   }

  ngOnInit(): void {

  }
  onSubmit(){
    var user = {
      username : this.userProfileForm.value.username,
      email : this.userProfileForm.value.email,
      password : this.userProfileForm.value.passwords.password,
      firstName : this.userProfileForm.value.firstName,
      lastName : this.userProfileForm.value.lastName,
      dateOfBirth : this.userProfileForm.value.dateOfBirth,
      address : this.userProfileForm.value.address,
      userTypes : this.userProfileForm.value.type,
      photo : this.userProfileForm.value.photo,
    }
    console.log(user);
    this.userService.putUser(user, this.id).subscribe();
  }
  showPreview(event: any) {
    const file = (event.target as HTMLInputElement).files[0];

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.user.photo = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
}
