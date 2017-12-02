import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Consultant } from './consultant.model';
import { ConsultantComent } from './consultant-comment.model';


@Injectable()
export class ConsultantsService {


  consultants: Consultant[];


  CONSULTANTS_ENDPOINT = 'http://demopeople.exolever.com/api/consultants/ ';
  CONSULTANT_ENDPOINT = 'http://demopeople.exolever.com/api/consultants/';
  COMMENT_SAVE_ENDPOINT = 'http://demopeople.exolever.com/api/comment/';


  constructor(private httpClient: HttpClient) { }


  getConsultants() {
    return this.httpClient.get(this.CONSULTANTS_ENDPOINT).pipe(
      map(response => {
        this.consultants = <Consultant[]>response;
        console.log(this.consultants);
        return this.consultants;
      }
      )
    );
  }


  getConsultantbyID(consultantID: string) {
    console.log('Peticion:' + `${this.CONSULTANT_ENDPOINT}${consultantID}/`);
    return this.httpClient.get(`${this.CONSULTANT_ENDPOINT}${consultantID}/`).pipe(
      map(response => {
        console.log('Respuesta -> ' + response);
        return <Consultant>response;
      }
      )
    );
  }

  setComment(comment: ConsultantComent) {

    return this.httpClient.post(`${this.COMMENT_SAVE_ENDPOINT}`, comment).pipe(
      map(response => {
        console.log('Respuesta -> ' + response);
        return response;
      }
      )
    );
  }


}
