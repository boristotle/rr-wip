import React, { Component } from 'react';

export default class BudgetComponent extends Component {

  constructor(){
  super();
    this.state = {
      modifying_budget: false,
    }
  };

  currencyPipe(budget){
    return `$${budget}`;
  };

  enableBudgetUpdate(){
    if (!this.props.isModifying) {
      this.setState({modifying_budget: true});
      this.props.updateModifyingInput(!this.props.isModifying);
    }
  };

  updateBudget(event){
    event.preventDefault();
    let budget = this.budget.value;
    this.props.updateRecordBudget(this.budget.value, this.props.id);
    this.setState({modifying_budget: false}, function(){
      this.props.updateModifyingInput(!this.props.isModifying);
        alert(`Budget updated to $${budget}`);
    });
  };

  render(){
      if (this.state.modifying_budget) {
        return <td>
          <form onSubmit={this.updateBudget.bind(this)}>
            <input autoFocus ref={(input) => this.budget = input} type='text' defaultValue={this.props.record}/>
          </form>
        </td> 
      } else {
        return <td onClick={this.enableBudgetUpdate.bind(this)}>{this.currencyPipe(this.props.record)}</td>
      }
  }
   

}