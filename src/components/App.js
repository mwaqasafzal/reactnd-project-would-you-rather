import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Question from './Question'
import Leaderboard from './Leadersboard'
import Navbar from './Navbar'
import Login from './Login';
import Notfound from './Notfound'
import { loadData } from '../actions/shared'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { authenticateUser } from '../actions/authedUser';


function App(props) {
  useEffect(() => props.dispatch(loadData()), []);

  return (

    props.authedUser ? (
      <React.Fragment>
        <header>
          <Navbar logout={() => props.dispatch(authenticateUser(null))} />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/questions/:qid" component={Question} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/leadersboard" component={Leaderboard} />
            <Route path="*" component={Notfound} />
          </Switch>

        </main>
      </React.Fragment>
    ) : <Login />

  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});
export default connect(mapStateToProps)(App);
