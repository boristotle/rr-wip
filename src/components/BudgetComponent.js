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
    this.setState({modifying_budget: true});
  };

  updateState(){
    this.setState({modifying_budget: false})
  }

  updateBudget(event){
    event.preventDefault();
    let budget = this.budget.value;
    this.props.updateRecordBudget(this.budget.value, this.props.id);
    this.setState({modifying_budget: false}, function(){
        alert(`Budget updated to $${budget}`);
    });
  };

  render(){
      if (this.state.modifying_budget) {
        return <td>
          <form onSubmit={this.updateBudget.bind(this)}>
            <input onBlur={this.updateState.bind(this)} autoFocus ref={(input) => this.budget = input} type='text' defaultValue={this.props.record}/>
          </form>
        </td> 
      } else {
        return <td onClick={this.enableBudgetUpdate.bind(this)}>{this.currencyPipe(this.props.record)}</td>
      }
  }
   

}