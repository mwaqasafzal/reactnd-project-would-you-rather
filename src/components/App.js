import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import NewPoll from './NewPoll'
import Poll from './Poll'
import Leaderboard from './Leaderboard'
import Navbar from './Navbar'
import { loadData } from '../actions/shared'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'

function App(props) {
  useEffect(() => props.dispatch(loadData()), []);
  return (
    props.authedUser ? (
      <React.Fragment>
        <header>
          <Navbar logout={() => alert('logging out')} />
        </header>
        <main>
            <Route path="/" exact  component={Dashboard}/>
            <Route path="/questions/:qid" component={Poll}/>
            <Route path="/add" component={NewPoll}/>
            <Route path="/leaderboard" component={Leaderboard}/>
        </main>
      </React.Fragment>
    ) : <h3 className="center">Loading</h3>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});
export default connect(mapStateToProps)(App);
