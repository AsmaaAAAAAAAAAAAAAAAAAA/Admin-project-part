import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthenService } from 'src/app/services/user-authen.service';

import { IUser } from 'src/app/ViewModels/iuser';
import { NewUser } from 'src/app/ViewModels/new-user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public ISLogged:boolean=false;
  newuser: NewUser={} as NewUser;
  constructor(private fb:FormBuilder, private UserAuthenticatingServic: UserAuthenService
    , private router:Router) {
  }
  ngOnInit(): void {
   
  
  }
  Login()
  {
    this.UserAuthenticatingServic.Login(this.newuser).subscribe(res=>{ localStorage.setItem("tk",res.token)
    ,this.router.navigate(['/Order'])},(error)=>{console.log(error)});
    this.ISLogged=this.UserAuthenticatingServic.ISUserloggedin
  }

}
