import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConsultantsService } from '../consultants.service';
import { Consultant } from '../consultant.model';


@Component({
  selector: 'app-consultant-detail',
  templateUrl: './consultant-detail.component.html',
  styleUrls: ['./consultant-detail.component.scss']
})
export class ConsultantDetailComponent implements OnInit {

  consultant: Consultant;
  loadingData: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private consultantsService: ConsultantsService
  ) {
    this.loadingData = true;
    this.activateRoute.paramMap.subscribe(
      (params: ParamMap) => {
        console.log('param ' + params.get('id'));
        this.consultantsService.getConsultantbyID(params.get('id')).subscribe(
          (response) => {
            this.consultant = response;
            this.loadingData = false;
          },
          () => this.loadingData = false);
      }
    );
  }


  ngOnInit() {

  }

}
