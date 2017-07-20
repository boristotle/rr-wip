import React from 'react';
import ReactDOM from 'react-dom';
import RecordsContainer from '../containers/RecordsComponent';
import store from '../store';
import {Provider} from 'react-redux';
import ReactTestUtils from 'react-dom/test-utils'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(  
      <div> 
        ReactTestUtils.renderIntoDocument(<Provider store={store}><RecordsContainer /></Provider>);
      </div>, 
      div);
});