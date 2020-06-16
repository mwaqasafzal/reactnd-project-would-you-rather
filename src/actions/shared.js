import { getData } from '../utils/api'
import { receiveUsers } from './users';
import { receiveQuestions } from './questions'
import {authenticateUser} from './authedUser'

const user="tylermcginnis";

export const loadData = () => {
    return dispatch => {
            getData()
            .then(({questions, users}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(authenticateUser(user))
            })
    }

}