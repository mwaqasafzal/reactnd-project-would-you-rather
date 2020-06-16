import * as actionTypes from '../actions/questions'


export default (state = {}, action) => {

    switch (action.type) {
        case actionTypes.RECEIVE_QUESTIONS:
            return action.questions;
        case actionTypes.ADD_QUESTION:
            const { question } = action;
            return {
                ...state,
                [question.id]: question
            }
        case actionTypes.UPDATE_QUESTION_ANSWERS:
            const { qid, authedUser, answer } = action.info;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {//might be optionA or optionB
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authedUser)

                    }
                }
            }
        default:
            return state;
    }
}