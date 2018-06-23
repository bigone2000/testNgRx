import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CounterState } from './stores/counter.store';
import * as CounterActions from './actions/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter: Observable<number>;
  constructor(private store: Store<CounterState>) {
    this.counter = store.select('counterReducer');
  }
  increment() {
    this.store.dispatch(new CounterActions.Increment());
  }
  decrement() {
    this.store.dispatch(new CounterActions.Decrement());
  }
  reset() {
    this.store.dispatch(new CounterActions.Reset(3));
  }
}
