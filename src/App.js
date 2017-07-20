import React, { Component } from 'react';
import './App.css';
// import RecordsComponent from './RecordsComponent';
import RecordsContainer from './containers/RecordsContainer';
// import {Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
          <RecordsContainer />
      </div>
    );
  }
}
