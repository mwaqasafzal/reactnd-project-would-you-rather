import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Question from './Question'
import Leaderboard from './Leadersboard'
import Navbar from './Navbar'
import { loadData } from '../actions/shared'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'


function App(props) {
  useEffect(() => props.dispatch(loadData()), []);
  return (

    props.authedUser ? (
      <React.Fragment>
        <header>
          <Navbar logout={() => alert('logging out')} />
        </header>
        <main>
          <Route path="/" exact component={Dashboard} />
          <Route path="/questions/:qid" component={Question} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/leadersboard" component={Leaderboard} />
        </main>
      </React.Fragment>
    ) : <h3 className="center">Loading</h3>

  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});
export default connect(mapStateToProps)(App);
