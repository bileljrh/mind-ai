import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { AnimationsListComponent } from './components/animations-list/animations-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [
    `
        :host {
            @keyframes slidedown-icon {
                0% {
                    transform: translateY(0);
                }

                50% {
                    transform: translateY(20px);
                }

                100% {
                    transform: translateY(0);
                }
            }

            .slidedown-icon {
                animation: slidedown-icon;
                animation-duration: 30s;
                animation-iteration-count: infinite;
            }

            .box {
                background-image: radial-gradient(var(--primary-300), var(--primary-600));
                border-radius: 50% !important;
                color: var(--primary-color-text);
            }
        }
    `
]

})
export class AppComponent implements OnInit , AfterViewInit{
  title = 'Mindai';
  @ViewChildren('scrollSection') scrollSections: any;

  showChart = false;


  @ViewChild('animatedElement') animatedElement !: ElementRef;

  observer !: IntersectionObserver;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.shouldLoadChildComponent = true
    }, 10);

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add your animation logic here, e.g., add a CSS class
          entry.target.classList.add('animate-class');
        }
      });
    });

    // Start observing the element
    this.observer.observe(this.animatedElement.nativeElement);

  }

  shouldLoadChildComponent = false;
  @ViewChild('childContainer') childContainer !: ElementRef;

  onScroll() {
    const containerRect = this.childContainer.nativeElement.getBoundingClientRect();
    console.log(containerRect.bottom);
    console.log(containerRect.bottom);

    console.log('kkkkkkk:',containerRect);
    
    
    const isVisible = (
      containerRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      containerRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    if (isVisible) {
      this.shouldLoadChildComponent = true;
      console.log("heloooooooooo");
    }
  }

  onChartVisible() {
    this.showChart = false;  
    setTimeout(() => {
      this.showChart = true;  
    }, 0);
  }


  @ViewChildren(AnimationsListComponent, { read: ElementRef }) childComponents!: QueryList<ElementRef>;

  children = Array(5).fill(0);

  ngAfterViewInit() {
    const options = {
      root: document.querySelector('.animationcom'),
      rootMargin: '0px',
      threshold: 0.5 // Adjust this value to determine visibility
    };

    const observer = new IntersectionObserver(this.intersectionCallback, options);
    this.childComponents.forEach(child => {
      observer.observe(child.nativeElement);
    });
  }

  intersectionCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Visible child component:', entry.target);
      }
    });
  }


  logVisibility(child: string) {
    console.log(`${child} is visible`);
  }

}
