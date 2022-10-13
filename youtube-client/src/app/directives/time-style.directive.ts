import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTimeStyle]',
})
export class TimeStyleDirective {

  @Input('appTimeStyle') postDate:string = '';

  private color:string = 'green';

  constructor(private el: ElementRef, private r: Renderer2) {
    console.log('directive->', el.nativeElement, this.postDate) ;
    this.r.setStyle(this.el.nativeElement, 'background-color', this.color);

  }

}
