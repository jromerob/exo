import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared.module';
import { ConsultantsModule } from '../../consultants/consultants.module';
import { HomeComponent } from '../../../components/home/home.component';
import { APP_BASE_HREF } from '@angular/common';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, ConsultantsModule],
      declarations: [HomeComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se debe crear', () => {
    expect(component).toBeTruthy();
  });
});
