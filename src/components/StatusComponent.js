import React, { Component } from 'react';

export default class StatusComponent extends Component {

  constructor(){
  super();
    this.state = {
      modifying_status: false,
    }
  };

  enableStatusUpdate(){
    this.setState({modifying_status: true});
  };

  updateState(){
    this.setState({modifying_status: false})
  }

  updateStatus(event){
    event.preventDefault();
    let status = this.status.value;
    this.props.updateRecordStatus(this.status.value, this.props.id);
    this.setState({modifying_status: false}, function(){
      alert(`Status updated to ${status}`);
    });
  };


  render(){
    if (this.state.modifying_status) {
      return <td>
        <form onSubmit={this.updateStatus.bind(this)}>
          <input onBlur={this.updateState.bind(this)} autoFocus ref={(input) => this.status = input} type='text' defaultValue={this.props.record}/>
        </form>
      </td> 
    } else {
      return <td onClick={this.enableStatusUpdate.bind(this)}>{this.props.record}</td>
    }
  }
   

}