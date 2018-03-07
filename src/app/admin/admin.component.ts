import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private location: Location,private router: Router,private routers:ActivatedRoute) {
    this.id = routers.snapshot.params['id']
  }
  name:string;
  aaa:string;
  id:string;
  ngOnInit() {
    console.log(this.location)
    console.log(this.router)
    console.log(this.router)
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
