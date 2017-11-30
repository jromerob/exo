import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantsComponent } from './consultants/consultants.component';
import { ConsultantDetailComponent } from './consultant-detail/consultant-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConsultantsComponent, ConsultantDetailComponent],
  exports: [ConsultantsComponent, ConsultantDetailComponent]
})
export class ConsultantsModule { }
