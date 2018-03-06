import { Component, OnInit } from '@angular/core';
import { HttpService }         from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  obj;

  ngOnInit() {
  }

  httpClick() :void{
  	this.httpService
        .getHeroes()
        .then(data => {
        	console.log('data', data)
        	console.log('data', data)
          this.obj = data
        });
  }
}
