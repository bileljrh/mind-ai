import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appVisibility]'
})
export class VisibilityDirective {
  @Output() visible = new EventEmitter<boolean>();

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    this.visible.emit(isVisible);
  }
}
