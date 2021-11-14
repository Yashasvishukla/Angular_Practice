import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {

  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  inc(): void
  {
    this.resize(+1);
  }

  dec(): void {
    this.resize(-1);
  }

  resize(delta: number): void
  {
    this.size = this.size + delta;
    this.sizeChange.emit(this.size);
  }
}
