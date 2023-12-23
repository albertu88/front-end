import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../shared/models/LoginModel';
import { NgForm } from '@angular/forms';
import { AuthenticatedResponse } from '../shared/models/AuthenticatedResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  invalidLogin: boolean = false;
  credentials: LoginModel = {username: '', password: ''};

  constructor(private router: Router, private http: HttpClient){}

  ngOnInit(): void {
    
  }

  login = (form: NgForm) => {
    if (form.valid){
      this.http.post<AuthenticatedResponse>("https://localhost:7090/api/auth/login", this.credentials, {
        headers: new HttpHeaders({"Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) =>{
          const token = response.token;
          const refreshToken = response.refreshToken;
          localStorage.setItem("jwt", token);
          localStorage.setItem("refreshToken", refreshToken);
          this.invalidLogin = false;
          this.router.navigate(["/"]);
          console.log("successfully logged in");
        },
        error: (err: HttpErrorResponse) => {
          this.invalidLogin = true;
          console.log("ERROR trying to log in" + err);
        }
      })
    }
  }

}
