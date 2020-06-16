import * as actionTypes from '../actions/users'


export default (state = {}, action) => {

    switch (action.type) {

        case actionTypes.RECEIVE_USERS:
            return action.users;
        case actionTypes.NEW_QUESTION: {
            //writing the code in block in order to prevent parsing error for 
            //destructuring same named identifiers in different blocks(cases)
            const { qid, authedUser } = action.question;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    questions: state[authedUser].questions.concat(qid)
                }
            }
        }

        case actionTypes.SAVE_ANSWER: {
            const { authedUser, qid, answer } = action.info;

            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }

        }

        default:
            return state;
    }
}

