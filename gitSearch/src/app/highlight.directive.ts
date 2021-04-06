import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele:ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('skyblue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: any) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
