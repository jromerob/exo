import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConsultantsService } from '../consultants.service';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConsultantsComponent implements OnInit {

  constructor(private consultantsService: ConsultantsService) { }

  ngOnInit() {

    this.consultantsService.getConsultants().subscribe();

  }

}
