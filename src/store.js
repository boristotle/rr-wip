import {createStore} from 'redux';
import {reducer} from './reducers/recordsReducer';
import * as recordActions from './actions/recordsActions';

const store = createStore(reducer);

store.subscribe(() => console.log('store', store.getState()) );

store.dispatch(recordActions.logRecord({record: 'record1'}));

export default store;