import questionsReducer from './questions'
import usersReducer from './users'
import authedUser from './authedUser'
import { combineReducers } from 'redux'

export default combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    authedUser
})

