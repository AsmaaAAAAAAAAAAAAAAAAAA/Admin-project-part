import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenService } from 'src/app/services/user-authen.service';


@Component({
  selector: 'app-Logout',
  templateUrl: './Logout.component.html',
  styleUrls: ['./Logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private UserAuthorizationnService:UserAuthenService
    ,private router:Router) { }

  ngOnInit() {
    this.UserAuthorizationnService.Logout();
    this.router.navigate(['/Login']);
  }

}
