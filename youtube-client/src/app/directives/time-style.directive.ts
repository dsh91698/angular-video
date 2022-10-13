import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTimeStyle]',
})
export class TimeStyleDirective {

  @Input() public publishedAt:string = '';
  // @Input('appTimeStyle') publishedAt:string = '';

  private color:string = 'red';

  private postDate:number = new Date().getTime();

  private dateOffset7d: number = (24 * 60 * 60 * 1000) * 7; //7 days

  private dateOffset30d: number = (24 * 60 * 60 * 1000) * 30; //30 days

  private dateOffset6M: number = (24 * 60 * 60 * 1000) * 30 * 6; //6 month

  private nowDate:number = new Date().getTime(); // today
  // If older than 6 months – Red
  // If from a month up to 6 months – Yellow
  // If from seven days up to a month – Green
  // If younger than 7 days – Blue

  constructor(private el: ElementRef, private r: Renderer2) {}

  ngOnInit(): any {
    this.postDate = new Date(this.publishedAt).getTime(); // post publish time
    let diff: number = this.nowDate - this.postDate;

    if (this.dateOffset7d > diff) {
      this.r.setStyle(this.el.nativeElement, 'border-bottom', '8px solid blue');
      return;
    }
    if (this.dateOffset7d < diff && this.dateOffset30d > diff) {
      this.r.setStyle(this.el.nativeElement, 'border-bottom', '8px solid green');
      return;
    }
    if (this.dateOffset30d < diff && this.dateOffset6M > diff) {
      this.r.setStyle(this.el.nativeElement, 'border-bottom', '8px solid yellow');
      return;
    }
  }

}
