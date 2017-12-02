import { Component, Input, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
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
  newComment: ConsultantComent;
  addingComment: boolean = false;
  @ViewChild('addform') addform;


  constructor(private consultantsService: ConsultantsService, private elementRef: ElementRef) { }

  ngOnInit() {

  }


  addNewComment() {
    this.newComment = new ConsultantComent();
    this.addingComment = true;
  }


  cancelNewComment() {


    this.addingComment = false


  }

  saveNewComment() {
    if (!this.newComment.created) this.newComment.created = new Date(Date.now())
    this.newComment.modified = new Date(Date.now());
    this.newComment.consultant = this.consultantId;
    this.newComment.user = "demoUser"
    this.newComment.status = "N";

    this.consultantsService.setComment(this.newComment).subscribe(
      () => this.addingComment = false,
      (error) => console.log(error)
    )

  }
  editComment(coment: ConsultantComent) {
    this.newComment = coment;
    this.addingComment = true;
    let editForm = this.elementRef.nativeElement.querySelector('#addComment')
    setTimeout((editForm) => editForm.scrollIntoView(), 500);


    //
    // this.consultantsService.setComment(this.newComment).subscribe(
    //   () => this.addingComment = false,
    //   (error) => console.log(error)
    // )

  }

  getRateStars(rate: number): string[] {
    let fakeArray: string[] = [];
    var n: number = 1;
    while (n <= rate && n < 11) {
      fakeArray.push("assets/star.png");
      n++;
    }

    if (n > 10) fakeArray = ["assets/star.png"];
    return fakeArray;
  }


}
