import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email :"",
    password: ""
  });
  constructor(private formBuilder: FormBuilder, private userService: UserService, private _router: Router, private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
    
  }
  onSubmit(form: any): void{
    this.userService.login(form.value).subscribe(
      (res: any) => {
        console.log(res.token)
        localStorage.setItem('jwt', res.token);
        localStorage.setItem('id', res.id)
        this._router.navigate(['/dashboard']);
      },
      err => {
        if(err.status == 400){
          window.alert('Incorrect username or password.');
        }
        else{
          window.alert('Incorrect username or password.');
          console.log(err);
        }
      }
    );
    
  }
  isUserAuthenticated(){
    const token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
  
}
