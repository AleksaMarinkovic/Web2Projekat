import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError} from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';

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
    return this.httpClient.put(this.url + "/" + id.toString(), user).pipe(
      catchError(handleError)
    );;
  }

}
