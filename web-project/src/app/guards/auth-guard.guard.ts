import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router){
  }
  canActivate(){
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){      
      return true;
    }
    console.log(token, !this.jwtHelper.isTokenExpired(token))
    this.router.navigate(["/"]);
    return false;
  }
  
}
