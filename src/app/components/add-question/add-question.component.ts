import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from './../../models/Question';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @Output() questionAddedEvent = new EventEmitter<Question>();

  text:string;
  answer:string;

  constructor() { }

  ngOnInit() {
  }

  addQuestion(){
    this.questionAddedEvent.emit({text:this.text, answer:this.answer, hide:true});
  }
}
