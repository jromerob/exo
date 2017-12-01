import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantsComponent } from './consultants/consultants.component';
import { ConsultantDetailComponent } from './consultant-detail/consultant-detail.component';
import { ConsultantsService } from './consultants.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, AppRoutingModule
  ],
  declarations: [ConsultantsComponent, ConsultantDetailComponent],
  providers: [ConsultantsService],
  exports: [ConsultantsComponent, ConsultantDetailComponent]
})
export class ConsultantsModule { }
