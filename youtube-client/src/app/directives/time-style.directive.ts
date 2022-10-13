import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTimeStyle]',
})
export class TimeStyleDirective {

  // @Input() public publishedAt:string = '';
  @Input('appTimeStyle') publishedAt:string = '';

  private color:string = 'red';

  // rez.sort((a, b) => (new Date(a.snippet.publishedAt).getTime()) - (new Date(b.snippet.publishedAt).getTime())); // desc sort
  // If older than 6 months – Red
  // private postDate:Date = new Date(this.publishedAt);

  private nowDate:Date = new Date();

  // If from a month up to 6 months – Yellow
  // If from seven days up to a month – Green
  // If younger than 7 days – Blue

  constructor(private el: ElementRef, private r: Renderer2) {
    console.log(
      // 'directive->', el.nativeElement, 
      'published->', this, 
      this.publishedAt,
      'nowDate->', this.nowDate,
      );
    this.r.setStyle(this.el.nativeElement, 'background-color', this.color);

  }

}
