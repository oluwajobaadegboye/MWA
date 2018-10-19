import { Directive, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective implements OnInit {

  @Output() public childEvent = new EventEmitter();

  @Input() color:string;

  constructor() { 

  }

  ngOnInit(): void { 

  }

  fireEvent(){
    this.childEvent.emit(this.color);
  }
}
