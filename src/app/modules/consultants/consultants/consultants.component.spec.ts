import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantsComponent } from './consultants.component';
import { ConsultantCommentsComponent } from '../consultant-comments/consultant-comments.component';
import { ConsultantsService } from '../consultants.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from '../../../components/home/home.component';
import { ConsultantDetailComponent } from '../../../modules/consultants/consultant-detail/consultant-detail.component';
import { AppRoutingModule } from '../../..//app-routing.module';
import { FormsModule } from '@angular/forms';

import { APP_BASE_HREF } from '@angular/common';

describe('ConsultantsComponent', () => {
  let component: ConsultantsComponent;
  let fixture: ComponentFixture<ConsultantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule, AppRoutingModule, FormsModule],
      declarations: [ConsultantsComponent, HomeComponent, ConsultantDetailComponent, ConsultantCommentsComponent],
      providers: [ConsultantsService, { provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse', () => {
    expect(component).toBeTruthy();
  });

});
