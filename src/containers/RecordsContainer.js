import RecordsComponent from '../RecordsComponent';
import {connect} from 'react-redux';
import {updateFilteredRecords} from '../actions/RecordsActions';

const mapStateToProps = function(state) {
  return {records: state.records, filteredRecords: state.filteredRecords};
}

const mapDispatchToProps = function(dispatch) {
  return {
    updateFilteredRecords: function(records) {
      dispatch(updateFilteredRecords(records))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordsComponent);