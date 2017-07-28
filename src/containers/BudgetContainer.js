import BudgetComponent from '../components/BudgetComponent';
import {connect} from 'react-redux';
import {updateModifyingInput} from '../actions/RecordsActions';

const mapStateToProps = function(state) {
  return {isModifying: state.isModifying};
}

const mapDispatchToProps = function(dispatch) {
  return {
    updateModifyingInput: function(isModifying) {
      dispatch(updateModifyingInput(isModifying))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetComponent);