import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations-list',
  templateUrl: './animations-list.component.html',
  styleUrls: ['./animations-list.component.scss']
})
export class AnimationsListComponent implements OnInit{

  count1 !: number;
  count2 !: number;
  count3 !: number;

  // @Input() counter1
  constructor(private el: ElementRef) { }


  ngOnInit(): void {
    this.counter('count1', 0, 400, 3000);
    this.counter('count2', 100, 50, 2500);
    this.counter('count3', 0, 40, 3000);

  }
  counter(id: string, start: number, end: number, duration: number) {
    let obj = this.el.nativeElement.querySelector('#' + id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }


  onLoadChild() {
    console.log('Child component loaded!');
  }

}
