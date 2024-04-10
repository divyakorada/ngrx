import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
  numberCounter: number;
  constructor(private store: Store<{countXyz: {counter: number}}>) {}


  ngOnInit() {
    this.store.select('countXyz').subscribe(data => {
      console.log('data', data);
      this.numberCounter = data.counter;
    })
  }

}
