import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantsComponent } from './consultants.component';
import { ConsultantsService } from '../consultants.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from '../../../components/home/home.component';
import { ConsultantDetailComponent } from '../../../modules/consultants/consultant-detail/consultant-detail.component';
import { AppRoutingModule } from '../../..//app-routing.module';
import { APP_BASE_HREF } from '@angular/common';


describe('ConsultantsComponent', () => {
  let component: ConsultantsComponent;
  let fixture: ComponentFixture<ConsultantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule, AppRoutingModule],
      declarations: [ConsultantsComponent, HomeComponent, ConsultantDetailComponent],
      providers: [ConsultantsService, { provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
