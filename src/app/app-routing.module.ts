import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ConsultantsComponent } from './modules/consultants/consultants/consultants.component';


const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'consultores', component: ConsultantsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
