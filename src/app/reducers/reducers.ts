import { ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { reducer } from './counter.reducer';

// console.log all actions
export function debug(_reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return _reducer(state, action);
  };
}
export const reducers: ActionReducerMap<any> = {
    counterReducer : reducer
};

export const metaReducers: MetaReducer<any>[] = [debug];
