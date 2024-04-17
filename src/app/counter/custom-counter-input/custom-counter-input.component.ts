import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customIncrement } from '../state/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit{
  value: number;
  channelName: string;

  constructor(private store: Store<{ countXyz: CounterState }>) {}

  ngOnInit() {
    this.store.select('countXyz').subscribe(data => {
      console.log("Channel Name observable called");
      this.channelName = data.channelName;
    })
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
