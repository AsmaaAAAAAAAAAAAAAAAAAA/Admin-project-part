import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/Custom Validators/PasswordmatchValidator';
import { UserAuthenService } from 'src/app/services/user-authen.service';

import { IUser } from 'src/app/ViewModels/iuser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userRegisterFormGroup: FormGroup;
  newuser: IUser={} as IUser;
  constructor(private fb:FormBuilder, private usrApiService: UserAuthenService
    , private router:Router) {


    this.userRegisterFormGroup = fb.group({
  
      userName: ['',[Validators.required,Validators.minLength(5)]],
      email: ['',[Validators.required,Validators.email]],
      password:['',Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ],
      ConfirmPassword: [''],

      


    },{ validators: passwordMatchValidator });

    }


  ngOnInit(): void {
  }
  get userName() {
    return this.userRegisterFormGroup.controls['userName'];
  }
  get password() {
    return this.userRegisterFormGroup.controls['password'];
  }
  get Email() {
    return this.userRegisterFormGroup.controls['email'];
  }

  get ConfirmPassword() {
    return this.userRegisterFormGroup.controls['ConfirmPassword'];
  }
  register()
  {
    console.log("service");
    this.usrApiService.Register(this.userRegisterFormGroup.value).subscribe
    (res=>{console.log(res)});   
    this.router.navigate(['/Order']);
  }
}

