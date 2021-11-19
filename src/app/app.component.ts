import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'track-by-example';
  collection = [];

  constructor() {
    this.collection = [{id: 1}, {id: 2}, {id: 3}];
  }
  
  addItem() {
    this.collection.push({ id: this.collection.length + 1});
  }
  
  trackByFn(index, item) {
    return index; // or item.id
  }
}