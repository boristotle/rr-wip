import React, { Component } from 'react';
import ProjectOwnerComponent from './ProjectOwnerComponent';
import BudgetComponent from './BudgetComponent';
import StatusComponent from './StatusComponent';
import TableHeaderComponent from './TableHeaderComponent';

export default class RecordsComponent extends Component {

  constructor(props){
    super(props);

    this.searchParams = {
        title: "",
        division: "",
        project_owner: "",
        budget: "",
        status: "",
        createdStart: "01/01/0000",
        createdEnd: "12/31/3000",
        modifiedStart: "01/01/0000",
        modifiedEnd: "12/31/3000"
    };

  };

  _updateRecordProjectOwner(project_owner, id){
    let newStateRecords = [...this.props.records];
    newStateRecords[id]['project_owner'] = project_owner;
    this.setState({records: newStateRecords});
  };

  _updateRecordBudget(budget, id){
    let newStateRecords = [...this.props.records];
    newStateRecords[id]['budget'] = budget;
    this.setState({records: newStateRecords});
  };

  _updateRecordStatus(status, id){
    let newStateRecords = [...this.props.records];
    newStateRecords[id]['status'] = status;
    this.setState({records: newStateRecords});
  };


  filterRecords(field, event, dropLastLetter){

    let filteredRecords;
    let newTargetValue;
    let propsRecordClone = [...this.props.records];

    if (dropLastLetter && event.target.value.length > 0){
      newTargetValue = event.target.value.slice(0, -1).toLowerCase();
    } else {
      newTargetValue = event.target.value.toLowerCase();
    }

   if (field === 'title') {
      this.searchParams = {...this.searchParams, title: newTargetValue};
    }
    else if (field === 'division') {
      this.searchParams = {...this.searchParams, division: newTargetValue};
    }
    else if (field === 'project_owner') {
      this.searchParams = {...this.searchParams, project_owner: newTargetValue};
    } 
    else if (field === 'budget') {
      this.searchParams = {...this.searchParams, budget: newTargetValue};
    } 
    else if (field === 'status'){
      this.searchParams = {...this.searchParams, status: newTargetValue};
    } 
    else if (field === 'created_start') {
      this.searchParams = {...this.searchParams, createdStart: event.target.value};
    }
    else if (field === 'created_end') {
      this.searchParams = {...this.searchParams, createdEnd: event.target.value};
    } 
    else if (field === 'modified_start') {
      this.searchParams = {...this.searchParams, modifiedStart: event.target.value};
    } 
    else if (field === 'modified_end') {
      this.searchParams = {...this.searchParams, modifiedEnd: event.target.value};
    }

    filteredRecords = propsRecordClone.filter((record) => {
      if (record.title.toLowerCase().indexOf(this.searchParams.title) >= 0 
        && record.division.toLowerCase().indexOf(this.searchParams.division) >= 0
        && record.project_owner.toLowerCase().indexOf(this.searchParams.project_owner) >= 0
        && record.budget.toString().indexOf(this.searchParams.budget) >= 0
        && record.status.toLowerCase().indexOf(this.searchParams.status) >= 0
        && new Date(record.created) >= new Date(this.searchParams.createdStart)
        && new Date(record.created) < new Date(this.searchParams.createdEnd)
        && new Date(record.modified) >= new Date(this.searchParams.modifiedStart)
        && new Date(record.modified) < new Date(this.searchParams.modifiedEnd)) {
        return record;
      }
      return false;
    })

   this.props.updateFilteredRecords(filteredRecords);

  };

  detectBackspace(field, event){
    if (event.keyCode === 8) {
      this.filterRecords(field, event, true);
    }
  };

  render() {

    console.log('this.props', this.props);
    
    let mappedRecords = this.props.filteredRecords.map((record, index) =>  
      <tr key={index}>
        <td> <a href="#">{record.title}</a></td>
        <td> {record.division} </td>
        <ProjectOwnerComponent id={index} updateRecordProjectOwner={this._updateRecordProjectOwner.bind(this)} record={record.project_owner} />
        <BudgetComponent id={index} updateRecordBudget={this._updateRecordBudget.bind(this)} record={record.budget} />
        <StatusComponent id={index} updateRecordStatus={this._updateRecordStatus.bind(this)} record={record.status} />
        <td> {record.created} </td> 
        <td> {record.modified} </td>
      </tr>
     )
    
    return (
      <div>
      <div><h1>Project Dashboard</h1></div>
      <table>
        <thead>
          <TableHeaderComponent />
            <tr>
            <th>
              <input onKeyDown={this.detectBackspace.bind(this, 'title')} onChange={this.filterRecords.bind(this, 'title')} type="text" placeholder="filter title"/>
            </th>
            <th>
              <input onKeyDown={this.detectBackspace.bind(this, 'division')} onChange={this.filterRecords.bind(this, 'division')} type="text" placeholder="filter division"/>
            </th>
            <th>
              <input onKeyDown={this.detectBackspace.bind(this, 'project_owner')} onChange={this.filterRecords.bind(this, 'project_owner')} type="text" placeholder="filter project owner"/>
            </th>
            <th>
              <input onKeyDown={this.detectBackspace.bind(this, 'budget')} onChange={this.filterRecords.bind(this, 'budget')} type="text" placeholder="filter budget"/>
            </th>
            <th>
              <input onKeyDown={this.detectBackspace.bind(this, 'status')} onChange={this.filterRecords.bind(this, 'status')} type="text" placeholder="filter status"/>
            </th> 
            <th>
              <input onKeyDown={this.detectBackspace.bind(this, 'created_start')} type="date" onChange={this.filterRecords.bind(this, 'created_start')} placeholder="start date"/> to <input onKeyDown={this.detectBackspace.bind(this, 'created_end')} type="date" onChange={this.filterRecords.bind(this, 'created_end')} placeholder="end date"/>
            </th>
            <th>
              <input onKeyDown={this.detectBackspace.bind(this, 'modified_start')} type="date" onChange={this.filterRecords.bind(this, 'modified_start')} placeholder="start date"/> to <input onKeyDown={this.detectBackspace.bind(this, 'modified_end')} type="date" onChange={this.filterRecords.bind(this, 'modified_end')} placeholder="end date"/>
            </th>
            </tr>
          </thead>
          <tbody>
            {mappedRecords}
          </tbody>
      </table>
      <div>
        <button>Add Record</button>
        <button>Export to PDF</button>
      </div>
      </div>
    );
  }
}
