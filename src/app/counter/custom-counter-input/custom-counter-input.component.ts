import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customIncrement } from '../state/counter.action';
import { getChannelName } from '../state/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit{
  value: number;
  channelName$: Observable<string>;

  constructor(private store: Store<{ countXyz: CounterState }>) {}

  ngOnInit() {
    this.channelName$ = this.store.select(getChannelName);
  }

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

  onChangeChannelName() {
   this.store.dispatch(changeChannelName());
  }
}
