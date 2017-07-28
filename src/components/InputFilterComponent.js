import React, { Component } from 'react';

export default class InputFilterComponent extends Component {

  handleFilterChange(event){
    let field = this.props.field;
    this.props.updateFilter(field, event.target.value);
  }

  render(){

    let placeholder = `filter ${this.props.field}`;

    return (
      <input onChange={this.handleFilterChange.bind(this)} type={this.props.type} placeholder={placeholder} />
    )
  }

}