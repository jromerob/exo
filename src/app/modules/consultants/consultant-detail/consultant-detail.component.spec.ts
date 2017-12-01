import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantDetailComponent } from './consultant-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from '../../../components/home/home.component';
import { AppRoutingModule } from '../../..//app-routing.module';
import { ConsultantsComponent } from '../consultants/consultants.component';
import { ConsultantsService } from '../consultants.service';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

describe('ConsultantDetailComponent', () => {
  let component: ConsultantDetailComponent;
  let fixture: ComponentFixture<ConsultantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, AppRoutingModule, HttpClientModule],
      declarations: [ConsultantDetailComponent, HomeComponent, ConsultantsComponent],
      providers: [ConsultantsService, { provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
