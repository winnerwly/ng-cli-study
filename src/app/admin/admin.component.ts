import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private location: Location,private router: Router) { }
  name:string;
  aaa:string;
  id:string;
  ngOnInit() {
    console.log(this.location)
    console.log(this.router)
    console.log(this.id = this.router.url.slice(7))
  }
  countChange($event) {
    if($event && $event.type) {
      this.aaa = $event.target.value
    } else if($event) {
      this.aaa = $event
    }else{
      this.aaa = ''
    }
  }
}
