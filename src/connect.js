import App from './App';
import {connect} from 'react-redux';

const mapStateToProps = function(state) {
  return { records: state.records }
}


// this is mapping the ACTIONS (functionality) we want the container to have
const mapDispatchToProps = function(dispatch) {
  return {
    logRecord: function(songId) {
      dispatch(logRecord({record: 'record1'}));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);