import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { OutputObject } from './interfaces/output-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test : any[] = [1,4,5,6, 'a'];
  title = this.test.filter(n => n < 5);

  DoIt() {
    enum color {red, blue, green};
    return color.green;
  }

  onClick(event: OutputObject) {
    console.log(event.name);
  }

}
