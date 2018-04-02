import { Component, OnInit, Input } from '@angular/core';
import { Question } from './../../models/Question';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input('q') question:Question;
  constructor( public dataService:DataService) { }

  ngOnInit() {
  }


  showme( hide ){
    if(hide == true)return "Show"
    else return "Hide"
  }

  removeQuestion(question){
    this.dataService.removeQuestion(question);
  }
}
