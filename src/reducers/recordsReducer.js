import {INITIAL_STATE} from '../InitialState';

export function reducer(state=INITIAL_STATE, action) {
  if (action.type === 'UPDATE_FILTERED_RECORDS') {
    state = {...state, filteredRecords: action.payload}
  }
  return state; 
};