import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ConsultantsComponent } from './modules/consultants/consultants/consultants.component';
import { ConsultantDetailComponent } from './modules/consultants/consultant-detail/consultant-detail.component';


const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'consultores', component: ConsultantsComponent },
  { path: 'consultor/:id', component: ConsultantDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
