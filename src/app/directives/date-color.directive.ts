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
    const end = parseInt(`${currentDate.getFullYear()}${currentDate.getMonth()}${currentDate.getDate()}`, 10);
    const start = parseInt(`${this.appDateColor.getFullYear()}${this.appDateColor.getMonth()}${this.appDateColor.getDate()}`, 10);

    if (end - start < 3 && !this.done) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    } else if (end - start < 7 && !this.done) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    }
  }

}
