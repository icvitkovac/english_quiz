import { Component } from '@angular/core';

@Component({
  selector: 'app-english-quiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private name: string;

  constructor() {
    try {
      this.name = window['Globals'].name;
***REMOVED*** catch (e) {
      this.name = 'Unknown';
***REMOVED***
***REMOVED***

}
