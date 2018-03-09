import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Question } from '../models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions:Question[];

  constructor(public dataService:DataService) { 
  	
  }

  ngOnInit() {
  	this.questions = this.dataService.getQuestions();
  }

  addQuestion(question:Question){
    this.dataService.addQuestion(question)
    // console.log(question);
  }

}
