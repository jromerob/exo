import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ConsultantsComponent } from './consultants/consultants.component';
import { ConsultantDetailComponent } from './consultant-detail/consultant-detail.component';
import { ConsultantsService } from './consultants.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';
import { ConsultantCommentsComponent } from './consultant-comments/consultant-comments.component';

@NgModule({
  imports: [
    CommonModule, SharedModule, AppRoutingModule, FormsModule
  ],
  declarations: [ConsultantsComponent, ConsultantDetailComponent, ConsultantCommentsComponent],
  providers: [ConsultantsService],
  exports: [ConsultantsComponent, ConsultantDetailComponent]
})
export class ConsultantsModule { }
