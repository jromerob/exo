import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModel, FormControl, Validators } from '@angular/forms';
import { ConsultantComent } from '../consultant-comment.model';
import { ConsultantsService } from '../consultants.service';

@Component({
  selector: 'app-consultant-comments',
  templateUrl: './consultant-comments.component.html',
  styleUrls: ['./consultant-comments.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConsultantCommentsComponent implements OnInit {

  @Input() consultantComents: ConsultantComent[];
  @Input() consultantId: number;

  RATING_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  MAX_STARS = 5;
  newComment: ConsultantComent;
  addingComment = false;

  formControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private consultantsService: ConsultantsService) { }

  ngOnInit() {

  }

  addNewComment() {
    this.newComment = new ConsultantComent();
    this.addingComment = true;
  }

  cancelNewComment() {

    this.addingComment = false;

  }

  saveNewComment() {
    if (!this.newComment.created) { this.newComment.created = new Date(Date.now()); }
    this.newComment.modified = new Date(Date.now());
    this.newComment.consultant = this.consultantId;
    this.newComment.user = 'demoUser';
    this.newComment.status = 'N';

    this.consultantsService.setComment(this.newComment).subscribe(
      (newComent) => {
        this.addingComment = false;
        this.consultantComents.unshift(newComent);
      },
      (error) => console.log(error)
    );

  }

  editComment(coment: ConsultantComent) {
    this.newComment = coment;
    this.addingComment = true;

  }

  getRateStars(rate: number): string[] {
    let fakeArray: string[] = [];
    let n = 1;
    while (n <= rate && n <= this.MAX_STARS) {
      fakeArray.push('assets/star.png');
      n++;
    }

    if (n > this.MAX_STARS) { fakeArray = ['assets/star.png']; }
    return fakeArray;
  }

}
