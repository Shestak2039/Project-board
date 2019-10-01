import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDateColor]'
})
export class DateColorDirective implements OnInit {
  @Input() appDateColor: Date;
  @Input() done: boolean;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    const currentDate = new Date();
    const end = currentDate.getTime();
    const start = this.appDateColor.getTime();

    if ((end - start) / 86400000 < 3 && !this.done) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    } else if ((end - start) / 86400000 < 7 && !this.done) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    }
  }

}
