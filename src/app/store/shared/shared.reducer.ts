import { createReducer, on } from '@ngrx/store';
import { initialState } from './shared.state';
import { setLoadingSpinner } from './shared.actions';

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    console.log('loader state', state);
    console.log('loader action', action);
    return {
      ...state,
      showLoading: action.status
    };
  })
);

export function sharedReducer(state, action) {
  return _sharedReducer(state, action);
}
