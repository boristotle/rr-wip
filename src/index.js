import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/AppComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppComponent />, document.getElementById('root'));
registerServiceWorker();
