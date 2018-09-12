import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  private setHighlightColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('click') onSingleClick() {
    this.setHighlightColor('green');
  }

  @HostListener('dblclick') onDoubleClick() {
    this.setHighlightColor('blue');
  }
}
