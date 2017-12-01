import { TestBed, inject } from '@angular/core/testing';

import { ConsultantsService } from './consultants.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators';

describe('ConsultantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ConsultantsService]
    });
  });

  it('should be created', inject([ConsultantsService], (service: ConsultantsService) => {
    expect(service).toBeTruthy();
  }));
});
