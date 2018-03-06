import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Input() name:string = '123';
  @Input() title:string = '按钮';
  @Input() modalTitle:string = '查看';
  @Output() change = new EventEmitter();

  admin:string;
  ngOnInit() {
  }
  handleChange() {
    this.change.emit(this.admin);
    console.log(this.admin);
  }
  primary() {
    alert(1);
    // this.name='1231';
    // this.change.emit('002255');
  }

}
