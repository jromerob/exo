import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConsultantsService } from '../consultants.service';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConsultantsComponent implements OnInit {

  loadingData: boolean;

  constructor(private consultantsService: ConsultantsService) { }

  ngOnInit() {

    this.loadingData = true;
    this.consultantsService.getConsultants().subscribe(
      () => this.loadingData = false,
      () => this.loadingData = false
    );

  }

}
