import React, { Component } from 'react';

export default class ProjectOwnerComponent extends Component {

  constructor(){
  super();
    this.state = {
      modifying_project_owner: false,
    }
  };

  enableProjectOwnerUpdate(){
    if (!this.props.isModifying) {
      this.setState({modifying_project_owner: true});
      this.props.updateModifyingInput(!this.props.isModifying);
    }
  };

  updateProjectOwner(event){
    event.preventDefault();
    let project_owner = this.project_owner.value;
    this.props.updateRecordProjectOwner(this.project_owner.value, this.props.id);
    this.setState({modifying_project_owner: false}, function(){
      this.props.updateModifyingInput(!this.props.isModifying);
      alert(`Project owner updated to ${project_owner}`);
    });
  };

  render(){
    if (this.state.modifying_project_owner) {
      return <td>
        <form onSubmit={this.updateProjectOwner.bind(this)}>
          <input autoFocus ref={(input) => this.project_owner = input} type='text' defaultValue={this.props.record}/>
        </form>
      </td>
    } else {
      return <td onClick={this.enableProjectOwnerUpdate.bind(this)}>{this.props.record}</td>
    }
  }
   

}