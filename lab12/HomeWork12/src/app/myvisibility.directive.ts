import { Directive, Input, OnChanges, HostBinding, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective  implements OnInit {
  
   
  @Input() isVisible;

  constructor(private elr:ElementRef) {  
  }

  ngOnInit(): void {
     console.log(" isVisible from OnInit",this.isVisible);
     if(!this.isVisible){ 
      this.elr.nativeElement.style.visibility="hidden"
    } 
  }
 
}
