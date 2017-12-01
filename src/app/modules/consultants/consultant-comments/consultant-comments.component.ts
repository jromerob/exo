import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ConsultantComent } from '../consultant-comment.model';

@Component({
  selector: 'app-consultant-comments',
  templateUrl: './consultant-comments.component.html',
  styleUrls: ['./consultant-comments.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConsultantCommentsComponent implements OnInit {

  @Input() consultanComents: ConsultantComent[];


  constructor() { }

  ngOnInit() {
  }

}
