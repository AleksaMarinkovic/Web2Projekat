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

}
