import React, { Component } from 'react';
import '../styles/App.css';
import RecordsContainer from '../containers/RecordsContainer';

export default class AppComponent extends Component {
  render() {
    return (
      <div>
          <RecordsContainer />
      </div>
    );
  }
}