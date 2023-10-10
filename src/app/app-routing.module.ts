import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';


const routes: Routes = [{ path: '/credit-card', component: CreditCardFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
