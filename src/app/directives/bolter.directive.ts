import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBolter]'
})
export class BolterDirective {
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.bolter('bold');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bolter(null);
  }
  private bolter(style: string) {
    this.el.nativeElement.style.fontWeight = style;
  }
}
