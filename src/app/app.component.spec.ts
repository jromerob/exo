import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { SharedModule } from './modules/shared/shared.module';
import { ConsultantsModule } from './modules/consultants/consultants.module';
import { HomeComponent } from './components/home/home.component';

import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, SharedModule, ConsultantsModule
      ],
      declarations: [
        AppComponent, HomeComponent
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));
  it('Se Crea la app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`El título debería ser 'Exo'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Exo');
  }));
  it('Debería tener el componente toolbar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const toolbar = fixture.debugElement.nativeElement.querySelector('app-toolbar');
    expect(toolbar).not.toBe(null);
  }));

});
