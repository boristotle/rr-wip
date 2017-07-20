import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/AppComponent';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
