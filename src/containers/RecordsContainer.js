import RecordsComponent from '../components/RecordsComponent';
import {connect} from 'react-redux';
import {updateFilteredRecords} from '../actions/RecordsActions';

const mapStateToProps = function(state) {
  return {records: state.records, filteredRecords: state.filteredRecords};
}

const mapDispatchToProps = function(dispatch) {
  return {
    updateFilteredRecords: function(filteredRecords) {
      dispatch(updateFilteredRecords(filteredRecords))
    },
    // updateModifyingInput: function(isModifying) {
    //   dispatch(updateModifyingInput(isModifying))
    // }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordsComponent);