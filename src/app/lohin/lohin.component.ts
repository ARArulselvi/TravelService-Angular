import { Component, OnInit } from '@angular/core';
import { Credentials } from '../credentials';

@Component({
  selector: 'app-lohin',
  templateUrl: './lohin.component.html',
  styleUrls: ['./lohin.component.css']
})
export class LohinComponent implements OnInit {

  user: Credentials = { userName: '', passWord: ''};
  status: string;
  constructor() { }

  ngOnInit() {
  }

  validate(){
    if(this.user.userName === 'india' && this.user.passWord=== 'india'){
        this.status = 'valid user';
    } else{
        this.status = 'invalid user'
    }
  }
}
