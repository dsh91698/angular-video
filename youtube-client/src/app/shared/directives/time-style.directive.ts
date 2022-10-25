import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTimeStyle]',
})
export class TimeStyleDirective implements OnInit {

  @Input() public publishedAt = '';

  private color = 'red';

  private postDate = new Date().getTime();

  private dateOffset7d = (24 * 60 * 60 * 1000) * 7; //7 days

  private dateOffset30d = (24 * 60 * 60 * 1000) * 30; //30 days

  private dateOffset6M = (24 * 60 * 60 * 1000) * 30 * 6; //6 month

  private nowDate = new Date().getTime(); // today
  // If older than 6 months – Red
  // If from a month up to 6 months – Yellow
  // If from seven days up to a month – Green
  // If younger than 7 days – Blue

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.postDate = new Date(this.publishedAt).getTime(); // post publish time
    let cardAge = this.nowDate - this.postDate;

    if (cardAge < this.dateOffset7d) {
      this.render.setStyle(this.el.nativeElement, 'border-bottom', '8px solid blue');
      return;
    }
    if (cardAge > this.dateOffset7d && cardAge < this.dateOffset30d) {
      this.render.setStyle(this.el.nativeElement, 'border-bottom', '8px solid green');
      return;
    }
    if (cardAge > this.dateOffset30d && cardAge < this.dateOffset6M) {
      this.render.setStyle(this.el.nativeElement, 'border-bottom', '8px solid yellow');
      return;
    }
    
  }

}
