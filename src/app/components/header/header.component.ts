import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserAuthenService } from 'src/app/services/user-authen.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  IsUserLogged:boolean =false;;
  public totalitem:Number=0;
  constructor(private UserAuthenticationService: UserAuthenService
            ,private cartservice:CartService) 
  { 
   
  }
  ngOnInit() {
  
    this.UserAuthenticationService.getStatusLoging().subscribe(status=>{
      this.IsUserLogged=status;
    });
  }
}
