import { CounterActionTypes } from '../actions/counter.action';
import { INITIAL_COUNTER_STATUS } from '../stores/counter.store';
import { Action } from '@ngrx/store';

export function reducer(status: number = INITIAL_COUNTER_STATUS.counter, action: Action): number {
    switch (action.type) {
        case CounterActionTypes.INCREMENT: {
            return status + 1;
        }
        case CounterActionTypes.DECREMENT: {
            return status - 1;
        }
        case CounterActionTypes.RESET: {
            return INITIAL_COUNTER_STATUS.counter;
        }
        default: {
            return status;
        }
    }
}
