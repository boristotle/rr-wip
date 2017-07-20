import {createStore} from 'redux';
import {reducer} from './reducers/RecordsReducer';
// import * as recordsActions from './actions/recordsActions';

const store = createStore(reducer);

store.subscribe(() => console.log('store', store.getState()) );

// store.dispatch(recordsActions.logRecord({record: 'record1'}));

export default store;