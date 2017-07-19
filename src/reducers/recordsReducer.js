export function reducer(state={}, action) {
  if (action.type === 'LOG_RECORD') {
    state = {...state, record: action.payload};
  }
  return state;
};