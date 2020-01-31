import { Component } from '@angular/core';

@Component({
  selector: 'calc',
  templateUrl: 'calc.component.html',
  styleUrls: ['calc.component.css']
})
export class CalcComponent {
  public number1: number;
  public number2: number;
  public result: number;

  public add() {
    if (this.number1 == null && this.number2 == null) {
      this.result = 0;
    } else if (this.number1 == null) {
      this.result = this.number2;
    }
    else if (this.number2 == null) {
      this.result = this.number1;
    }
    else {
      this.result = this.number1 + this.number2;
    }
  }
}