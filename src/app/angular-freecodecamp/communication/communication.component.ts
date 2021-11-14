import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  @Input('message')
  public childMessage: string;


  applyTextColor: boolean = false;

  @Output('childToParentMessage') parentMessage: EventEmitter<string> = new EventEmitter<string>();

  childMessgeString: string;

  constructor() { 
    this.childMessgeString = 'Allow access to child variables and methods';
  }

  ngOnInit(): void {
  }

  sendMessage(): void
  {
    this.parentMessage.emit("This is the message coming from the child component !!!!");
    this.applyTextColor != this.applyTextColor;
  }

}
