import { Directive } from '@angular/core';
import { Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoadImage]',
  standalone: true,
})
export class LazyLoadImageDirective implements OnInit {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private render: Renderer2) {}
  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (enteries) => {
        enteries.forEach((enter) => {
          if (enter.isIntersecting) {
            this.render.addClass(this.el.nativeElement, 'visible');
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.el.nativeElement);
  }
}
