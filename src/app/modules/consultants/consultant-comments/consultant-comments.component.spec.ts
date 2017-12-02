import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantCommentsComponent } from './consultant-comments.component';
import { ConsultantsComponent } from '../consultants/consultants.component';
import { ConsultantDetailComponent } from '../consultant-detail/consultant-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from '../../../components/home/home.component';
import { AppRoutingModule } from '../../..//app-routing.module';
import { ConsultantsService } from '../consultants.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';


describe('ConsultantCommentsComponent', () => {
  let component: ConsultantCommentsComponent;
  let fixture: ComponentFixture<ConsultantCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [SharedModule, AppRoutingModule, HttpClientModule, FormsModule],
      declarations: [ConsultantCommentsComponent, HomeComponent, ConsultantsComponent, ConsultantDetailComponent],
      providers: [ConsultantsService, { provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
