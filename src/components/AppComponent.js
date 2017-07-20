import React, { Component } from 'react';
import '../styles/App.css';
import RecordsComponent from './RecordsComponent';

export default class AppComponent extends Component {
  render() {
    return (
      <div>
        <RecordsComponent />
      </div>
    );
  }
}
