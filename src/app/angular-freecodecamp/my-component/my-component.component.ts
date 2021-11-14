import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommunicationComponent } from '../communication/communication.component';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit, AfterViewInit, OnDestroy {
  childmessage: string;
  item: any;

  @ViewChild(CommunicationComponent, {static: true}) communicationComp;
  fontSizepx: number;
  constructor() { }
  ngOnDestroy(): void {
  }
  ngAfterViewInit(): void {
    this.communicationComp.childMessgeString;
  }

  ngOnInit(): void {
    this.fontSizepx = 16;
    this.item =
      { name : 'Bob'};
  }

  messageFromChild(childMessage: string)
  {
    this.childmessage = childMessage;
  }
}


/*

Life cycle hooks

1. For fetching some data we generally do the operations in 
ngOnInit()

2. Component cleanup part is taken care by ngOnDestroy lifecycle hook



Order of lifecycle hooks

Constructor
ngOnChanges
ngOnInit
ngDoCheck

ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked

ngOnDestroy


*/


/*
Text Interpolation
Its an one way data binding technique that transfer data from typescript code to html template
{{}}
mostach syntax 

Text interpolation expressions
Not allowed once are
 = , += , -=
 new , typeof, instanceof
 chaining expression 
 some ES2015 operators and ++ --
*/