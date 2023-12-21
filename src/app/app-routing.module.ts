import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'customers', component: CustomersComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
