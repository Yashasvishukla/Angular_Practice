import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input() appHighlighter: string;
  constructor(public er: ElementRef) {
    console.log(er);
   }

   @HostListener('mouseenter') mouseEnter() {
     this.er.nativeElement.style.fontSize = "20px";
     this.er.nativeElement.style.fontStyle = 'italic';
     this.er.nativeElement.style.backgroundColor = this.appHighlighter;
   }
}
