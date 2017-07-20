import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './AppComponent';
import RecordsComponent from './RecordsComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(  
      <div>
        <RecordsComponent />
      </div>, 
      div);
});
