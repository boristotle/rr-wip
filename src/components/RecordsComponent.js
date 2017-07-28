import React, { Component } from 'react';
import ProjectOwnerComponent from './ProjectOwnerComponent';
import BudgetComponent from './BudgetComponent';
import StatusComponent from './StatusComponent';
import TableHeaderComponent from './TableHeaderComponent';
import InputFilterComponent from './InputFilterComponent';

export default class RecordsComponent extends Component {

  constructor(){
    super();
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
    }
  }

  _updateRecordProjectOwner(project_owner, id){
    let filteredRecords = [...this.props.filteredRecords];
    filteredRecords[id]['project_owner'] = project_owner;
    this.props.updateFilteredRecords(filteredRecords);
  };

  _updateRecordBudget(budget, id){
    let filteredRecords = [...this.props.filteredRecords];
    filteredRecords[id]['budget'] = budget;
    this.props.updateFilteredRecords(filteredRecords);
  };

  _updateRecordStatus(status, id){
    let filteredRecords = [...this.props.filteredRecords];
    filteredRecords[id]['status'] = status;
    this.props.updateFilteredRecords(filteredRecords);
  };

  _updateFilteredRecords(field, input){

    this.searchParams[field] = input;

    let filteredRecords;
    let propsRecordClone = [...this.props.records];

    filteredRecords = propsRecordClone.filter((record) => {
      if (record.title.toLowerCase().indexOf(this.searchParams.title.toLowerCase()) >= 0 
        && record.division.toLowerCase().indexOf(this.searchParams.division.toLowerCase()) >= 0
        && record.project_owner.toLowerCase().indexOf(this.searchParams.project_owner.toLowerCase()) >= 0
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

    this.props.updateFilteredRecords(filteredRecords)
  }

  render() {

    let mappedRecords;

    // console.log('this.props.filteredRecords in Records Component', this.props.filteredRecords);

    if (this.props.filteredRecords.length >= 0) {
    
    mappedRecords = this.props.filteredRecords.map((record, index) =>  
      <tr key={index}>
        <td> <a href="#">{record.title}</a></td>
        <td> {record.division} </td>
        <ProjectOwnerComponent editInputMode={this.editInputMode} id={index} updateRecordProjectOwner={this._updateRecordProjectOwner.bind(this)} record={record.project_owner} />
        <BudgetComponent editInputMode={this.editInputMode} id={index} updateRecordBudget={this._updateRecordBudget.bind(this)} record={record.budget} />
        <StatusComponent editInputMode={this.editInputMode} id={index} updateRecordStatus={this._updateRecordStatus.bind(this)} record={record.status} />
        <td> {record.created} </td> 
        <td> {record.modified} </td>
      </tr>
     )
    
    } else {
      mappedRecords = <tr><td>'No Records Available'</td></tr>
    }

    let inputFilterColumns = ['title', 'division', 'project_owner', 'budget', 'status'];
    let mappedFilterColumns = inputFilterColumns.map( (input, index) => 
      <th key={index}>
        <InputFilterComponent updateFilter={this._updateFilteredRecords.bind(this)} field={input} type="text" />
      </th> 
      )

    return (
      <div className='table-container'>
      <div className='title'><h1>Project Dashboard</h1></div>
      <table>
        <thead>
          <TableHeaderComponent />
            <tr>
            {mappedFilterColumns}
            <th>
               <InputFilterComponent updateFilter={this._updateFilteredRecords.bind(this)} field='createdStart' type="date" />
               to  
               <InputFilterComponent updateFilter={this._updateFilteredRecords.bind(this)} field='createdEnd' type="date" />
            </th>
            <th>
               <InputFilterComponent updateFilter={this._updateFilteredRecords.bind(this)} field='modifiedStart' type="date" />
                to  
                <InputFilterComponent updateFilter={this._updateFilteredRecords.bind(this)} field='modifiedEnd' type="date" />
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
