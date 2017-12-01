import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantsComponent } from './consultants.component';
import { ConsultantsService } from '../consultants.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from '../../../components/home/home.component';

describe('ConsultantsComponent', () => {
  let component: ConsultantsComponent;
  let fixture: ComponentFixture<ConsultantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule],
      declarations: [ConsultantsComponent, HomeComponent],
      providers: [ConsultantsService]
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
