import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appInViewport]'
})
export class InViewportDirective implements OnChanges {
  @Input('appInViewport') inViewport !: string;
  @Input() threshold: number = 0;

  private observed = false;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.observed) {
      this.observe();
    }
  }

  observe(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.inViewport = 'true';
            observer.disconnect();
          }
        });
      },
      { threshold: this.threshold }
    );

    observer.observe(this.el.nativeElement);
    this.observed = true;
  }
}
