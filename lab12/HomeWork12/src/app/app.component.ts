import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
 </div>
 <h1>NGFOR</h1>
 <ul *ngFor="let color of colors">
    <li>{{color}}</li>
 </ul>

 <h1>Testing Visibility Directives</h1>
    <div myvisibility  [isVisible]="sentInput">Div Visible</div> 

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeWork12';
  private colors = ["Red", "Green","Blue","Orange","Purple"];
  public sentInput:boolean = false;
}
