import * as actionTypes from '../actions/questions'


export default (state = {}, action) => {

    switch (action.type) {
        case actionTypes.RECEIVE_QUESTIONS:
            return action.questions;
        case actionTypes.ADD_QUESION:
            return {
                ...state,
                [action.question.id]:action.question
            }
        default:
            return state;
    }
}