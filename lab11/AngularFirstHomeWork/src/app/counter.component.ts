import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [`
      #outerDiv{
        border : 2px solid lightgreen;
        padding:30px;
        width:400px;
        margin:auto;
        text-align:right;
      }

      #innerDiv{
        border : 2px solid #ff9800;
        padding:20px;
        width:200px;
        margin:auto; 
      }
      button{
        padding:10px;
        margin:5px
      }
  `]
})
export class CounterComponent implements OnInit {
  private counterValue:number = 0;
  constructor() { }

  ngOnInit() {
  }

  private increaseCounter(){
    this.counterValue++;
  }
  private decreaseCounter(e){
    console.log(e);
    this.counterValue--;
  }
}
