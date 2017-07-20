import React, { Component } from 'react';

export default class TableHeaderComponent extends Component {

  render(){
    return(
      <tr>
        <th>
        Title
        </th>
        <th>
          Division
        </th>
        <th>
          Project Owner
        </th>
        <th>
          Budget
        </th>
        <th>
          Status
        </th>
        <th>
          Created
        </th>
        <th>
          Modified
        </th>
      </tr>
    )
  }

}