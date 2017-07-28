import {INITIAL_STATE} from '../InitialState';

export function reducer(state=INITIAL_STATE, action) {
  if (action.type === 'UPDATE_FILTERED_RECORDS') {
    state = {...state, filteredRecords: action.payload};
  }
  if (action.type === 'UPDATE_MODIFYING_INPUT') {
    state = {...state, isModifying: action.payload}
  }
  
  return state; 
};
