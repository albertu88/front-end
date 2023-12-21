import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private jwtHelper: JwtHelperService){};
  
  ngOnInit(): void {
    var a = "home working";
    console.log(a);
  }

  isUserAuthenticated(): boolean{
    const token = localStorage.getItem("jwt");

    if (token && !this.jwtHelper.isTokenExpired(token)){
      console.log(this.jwtHelper.decodeToken(token));
      return true;
    }

    return false;
  }

  logOut(){
  localStorage.removeItem("jwt");

  }


}
