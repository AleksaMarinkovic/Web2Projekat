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
 
  public userTypes = Object.values(userTypes);
  userProfileForm = this.formBuilder.group({
    username : ['', Validators.required],
    email: ['',Validators.email],    
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    dateOfBirth: ['',Validators.required],
    address: ['',Validators.required],
    userTypes: userTypes.CrewMember,     
    photo:  "../../../assets/images/PROFILE.png"
  });
  user: any;
  id : any;
  imgUrl: string = "../../../assets/images/PROFILE.png";
  
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.id = localStorage.getItem('id');
    this.userService.getUser(this.id).subscribe( data => {
      this.user = data;
      this.imgUrl = this.user.photo;
      this.userProfileForm = this.formBuilder.group({
        username: this.user.username,
        email: this.user.email,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        dateOfBirth: this.user.dateOfBirth,
        address: this.user.address,
        userTypes: this.user.photo,     
        photo: this.user.photo      
      });
      
      console.log(this.user)});
   }

  ngOnInit(): void {

  }
  onSubmit(){
    var user: User = {
      email : this.userProfileForm.value.email,
      password : this.user.password,
      firstName : this.userProfileForm.value.firstName,
      lastName : this.userProfileForm.value.lastName,
      dateOfBirth : this.userProfileForm.value.dateOfBirth.toString(),
      address : this.userProfileForm.value.address,
      userTypes : this.userProfileForm.value.userTypes,
      photo : this.imgUrl,
      userId : this.id,
      username : this.userProfileForm.value.username,
    }
    console.log(user);
    this.userService.putUser(this.id, user ).subscribe();
  }
  showPreview(event: any) {
    const file = (event.target as HTMLInputElement).files[0];

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imgUrl = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
}
export interface User{
  
  username: string,
  email: string,
  password: string,
  address: string,
  photo: string,
  userTypes: string,
  dateOfBirth: string,
  firstName: string,
  lastName: string,
  userId: number,
}