import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent {
  value: number;

  constructor(private store: Store<{ counter: CounterState }>) {}

  onAdd() {
    console.log(typeof this.value);
    const numericValue = +this.value;
    if (!isNaN(numericValue)) {
      this.store.dispatch(customIncrement({ customValue: numericValue }));
      // +'Divya' = NaN // +'123' = 123 // +'123Divya' = NaN // + is an Unary operator
    } else {
      console.error('Invalid input. Please enter a valid number.');
    }
  }
}
