import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-fetch-operator',
  templateUrl: './fetch-operator.component.html',
  styleUrls: ['./fetch-operator.component.css']
})
export class FetchOperatorComponent implements OnInit {
 
  @Input() srchCity: string;
  @Output() operator: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  send(){
    console.log("send mthd fired");
    if(this.srchCity === 'chennai'){
        this.operator.emit('Ramesh 789654123');
    } else {
        this.operator.emit('Suresh 123654789');
    }
  }
}
