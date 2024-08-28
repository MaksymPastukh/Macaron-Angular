import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBackgroundButton]'
})
export class BackgroundButtonDirective {

  @Input() appBackgroundButtonDefault: string = 'linear-gradient(to top, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)'
  @Input() appBackgroundButtonFocus: string = 'yellow'

  constructor(private elem: ElementRef) {
  }

  @HostListener('mouseover')
  onMouseover(): void {
    this.elem.nativeElement.style.background = this.appBackgroundButtonFocus
  }

  @HostListener('mouseout')
  onMouseout(): void {
    this.elem.nativeElement.style.background = this.appBackgroundButtonDefault
  }

}
