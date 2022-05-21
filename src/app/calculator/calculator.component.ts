import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  textDisplay: string = "";

  pressBtn(key: string) {
    this.textDisplay += key;
  }

  setOperand(op: string){
    this.textDisplay += op;
  }

  calcResult(){
    this.textDisplay = eval(this.textDisplay);
  }

  clear(){
    this.textDisplay = "";
  }

}
