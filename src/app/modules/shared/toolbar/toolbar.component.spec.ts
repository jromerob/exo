import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { SharedModule } from '../shared.module';
import { ConsultantsModule } from '../../consultants/consultants.module';
import { HomeComponent } from '../../../components/home/home.component';
import { APP_BASE_HREF } from '@angular/common';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, ConsultantsModule],
      declarations: [HomeComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });
  it('Debe tener un logo', async(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    const logo = fixture.debugElement.nativeElement.querySelector('.logo');
    expect(logo).not.toBe(null);
  }));
});
