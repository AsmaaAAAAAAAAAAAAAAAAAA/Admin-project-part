import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ProductCard]'
})
export class ProductCardDirective {
  @Input() defaultColor:string="green";
  constructor(private ElementRef:ElementRef) {
    
    //ElementRef.nativeElement.class=`border border-success mt-5 shadow  mb-5 bg-white rounded`;
    ElementRef.nativeElement.style.border=`6px ${this.defaultColor} solid`;
    ElementRef.nativeElement.style.borderRadius = "30px"
    ElementRef.nativeElement.style.boxShadow="0 0 9px #999999"
   }

   @HostListener('mouseenter') onMouseEnter()
  {
    this.ElementRef.nativeElement.style.boxShadow="0 0 15px #999999"
  }

  @HostListener('mouseout') onMouseOut()
  {
  this.ElementRef.nativeElement.style.boxShadow="0 0 9px #999999"  }

}
