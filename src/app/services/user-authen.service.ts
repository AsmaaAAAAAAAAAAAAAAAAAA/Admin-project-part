import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../ViewModels/iuser';
import { NewUser } from '../ViewModels/new-user';
import { UserToken } from '../ViewModels/user-token';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenService {
  private ISLoggedSubject:BehaviorSubject<boolean>;
  private HttpOptions;
  user:NewUser={} as NewUser;
  constructor(private HttpClientService: HttpClient) { 
    this.HttpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       //, 'Authorization': 'Token'
      })
    
    }
    this.ISLoggedSubject=new BehaviorSubject<boolean>(false);
 
  }
   Register(newUser:IUser): Observable<IUser>
   {
     console.log("service");
    return this.HttpClientService.post<IUser>(`http://localhost:43128/api/Account/Register`, JSON.stringify(newUser),this.HttpOptions);
   }
   Login(nuser:NewUser)
   {
    this.ISLoggedSubject.next(true);
    return this.HttpClientService.post<UserToken>(`http://localhost:43128/api/Account/Login`,JSON.stringify(nuser),this.HttpOptions);
    
   }
   Logout() 
   {
    this.ISLoggedSubject.next(false);
      localStorage.removeItem("token");
      console.log("IsLogged",this.ISUserloggedin);
     
   }
   get ISUserloggedin(): boolean
   {
      return localStorage.getItem("token") ? true:false;
   }

   getStatusLoging()
   {
     return this.ISLoggedSubject;
   }
}
