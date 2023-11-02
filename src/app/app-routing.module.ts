import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardFormComponent } from './api-mocks/credit-card-form/credit-card-form.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EEnviosComponent } from './api-mocks/e-envios/e-envios.component';
import { EFacturaComponent } from './api-mocks/e-factura/e-factura.component';


const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'credit-card', component: CreditCardFormComponent },
{ path: 'envio', component: EEnviosComponent },
{ path: 'factura', component: EFacturaComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'dashboard', component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
