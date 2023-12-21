import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";

export function getToken(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        allowedDomains: ["localhost:7090"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
