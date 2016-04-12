import { Map } from 'immutable';

export const initialState = Map({ count: 1 });

export const increment = (state, { payload = 1 }) =>
  state.update('count', c => c + payload);

export const decrement = (state, { payload = 1 }) =>
  state.update('count', c => c - payload);

export const reset = () => initialState;
