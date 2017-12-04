import { TestBed, inject, async } from '@angular/core/testing';
import { ConsultantsService } from './consultants.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const CONSULTANTS_ENDPOINT = 'http://demopeople.exolever.com/api/consultants/ ';

describe('ConsultantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ConsultantsService]
    });
  });

  it('Debería crear el servicio', inject([ConsultantsService], (service: ConsultantsService) => {
    expect(service).toBeTruthy();
  }));

  it('Debería devolver datos', async(inject([ConsultantsService], (service: ConsultantsService) => {

    service.getConsultants().toPromise().then(
      result => {
        console.log('resultado TEST:' + result.length);
        expect(result.length).toBeGreaterThan(0);
      }
    );
  })));

  it('retrieves all the cars', async(inject([ConsultantsService], (consultantsService) => {
    consultantsService.getConsultants().subscribe(result => expect(result.length).toBeGreaterThan(0));
  })));

  it(`Debería emitir una peticion GET`,
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        http.get(CONSULTANTS_ENDPOINT).subscribe();
        backend.expectOne({
          url: CONSULTANTS_ENDPOINT,
          method: 'GET'
        });
      })
    )
  );

  it(`Debería responder con mock correctamente`, async(inject([HttpClient, HttpTestingController],
    (http: HttpClient, backend: HttpTestingController) => {
      http.get(CONSULTANTS_ENDPOINT).subscribe((next) => {
        expect(next).toEqual({
          created: '2017-11-20T06:58:59.659606Z',
          date_joined: '2017-11-20T06:58:59.659636Z',
          email: 'beverleyobrien@hotmail.com',
          full_name: 'Iain Foster',
          gender: 'M',
          id: 1,
          location: '245 Johnson mountain↵East Graham↵W8 2SS',
          profile_picture: 'https://randomuser.me/api/portraits/men/1.jpg',
          short_name: 'Hugh'
        });
      });

      backend.match({
        url: CONSULTANTS_ENDPOINT,
        method: 'GET'
      })[0].flush({
        created: '2017-11-20T06:58:59.659606Z',
        date_joined: '2017-11-20T06:58:59.659636Z',
        email: 'beverleyobrien@hotmail.com',
        full_name: 'Iain Foster',
        gender: 'M',
        id: 1,
        location: '245 Johnson mountain↵East Graham↵W8 2SS',
        profile_picture: 'https://randomuser.me/api/portraits/men/1.jpg',
        short_name: 'Hugh'
      });
    })));

});
