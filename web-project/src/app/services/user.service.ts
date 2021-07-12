import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError} from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { User } from '../components/user-profile/user-profile.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://localhost:44358/api/Users"
  constructor(private httpClient: HttpClient) { }

  register(user: any){
    console.log(user);
    return this.httpClient.post(this.url + "/Register", user).pipe(      
      catchError(handleError)
    );;
  }

  login(formData: any){
    return this.httpClient.post(this.url + "/Login", formData).pipe(      
      catchError(handleError)
    );;
  }

  getUser(id: any){
    return this.httpClient.get(this.url + "/" + id.toString()).pipe(
      catchError(handleError)
    );;
  }
  putUser(id: any, user: any){
    return this.httpClient.put<User>(this.url + "/" + id, user, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  } 
}
