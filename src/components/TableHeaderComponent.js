import React, { Component } from 'react';

export default class TableHeaderComponent extends Component {

  render(){

    let columnHeaders = ['Title', 'Division', 'Project Owner', 'Budget', 'Status', 'Created', 'Modified'];

    let mappedHeaders = columnHeaders.map( (header, index) => { return <th key={index}>{header}</th>})
    return(
      <tr>
       {mappedHeaders}
      </tr>
    )
  }

}