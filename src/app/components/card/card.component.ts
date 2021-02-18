import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OutputObject } from 'src/app/interfaces/output-object';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor() {}

  @Input('mode') Mode: number = 4;
  @Output('changeMode') changeMode = new EventEmitter();

  public get X(): number {
    return this.X * 2;
  }

  public set Y(v: string) {
    this.Y = v;
  }

  isActive = false;
  outputObj: OutputObject = {
    id: 10,
    name: 'hojat',
  };

  onSave(event: any) {
    console.log(event.target.value);
    this.isActive = true;
    this.changeMode.emit(this.outputObj);
  }

  email: string = 'hi';
  keyUp(event: any) {
    console.log('enter is pressed!');
    console.log('email is: ', this.email);
  }

  text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  someNumber = 10;
  lessThanZeroFun(number: number) {
    return number < 0;
  }
}
