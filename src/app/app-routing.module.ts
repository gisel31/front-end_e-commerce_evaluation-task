import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'credit-card', component: CreditCardFormComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'dashboard', component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
