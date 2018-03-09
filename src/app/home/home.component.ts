import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private dataServices: DataService) { }

  ngOnInit() {
  	console.log('data', this.dataServices.getQuestions());
  }
  clickMe():void  {
  	this.router.navigate(['/admin','123']);
  }
}
