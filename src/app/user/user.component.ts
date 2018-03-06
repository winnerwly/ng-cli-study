import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInfo=[];
  form={
    name: '',
    phone: ''
  }

  constructor() {}
  add(item){
    console.log('item', item)
    this.userInfo.push(item)
    this.form={name: '', phone: ''}
  }
  updata(id,item){
    alert(11)
  }
  del(id){
    alert(id)
  }

  ngOnInit() {
  }

}
