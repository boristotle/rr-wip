import RecordsComponent from '../RecordsComponent';

import {connect} from 'react-redux';
// const playlistSongsActions = require('../actions/playlistSongs');
import {logRecord} from '../actions/recordsActions';

// this is mapping the DATA we want this container to have
const mapStateToProps = function(state) {
  return {records: state.records};
}

// this is mapping the ACTIONS (functionality) we want the container to have
// const mapDispatchToProps = function(dispatch) {
//   return {
//     logRecord: function(records) {
//       dispatch(logRecord(records));
//     }
//   }
// }

export default connect(mapStateToProps)(RecordsComponent);