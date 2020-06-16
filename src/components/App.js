import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import NewPoll from './NewPoll'
import Poll from './Poll'
import Leaderboard from './Leaderboard'
import { loadData } from '../actions/shared'
import { connect } from 'react-redux'

function App(props) {
  useEffect(() => props.dispatch(loadData()), []);
  return (
    <div>
      {props.authedUser ? <Poll params={{ qid: "8xf0y6ziyjabvozdd253nd" }} /> : <h3>Loading</h3>}
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});
export default connect(mapStateToProps)(App);
