import { Action } from '@ngrx/store';

export enum CounterActionTypes {
    INCREMENT = '[Counter] Increment',
    DECREMENT = '[Counter] Decrement',
    RESET = '[Counter] RESET'
}

export class Increment implements Action {
    constructor(public payload?: number) {}
    readonly type: string = CounterActionTypes.INCREMENT;
}

export class Decrement implements Action {
    constructor(public payload?: number) {}
    readonly type: string = CounterActionTypes.DECREMENT;
}

export class Reset implements Action {
    readonly type: string = CounterActionTypes.RESET;

    constructor(public payload?: number) {}
}
