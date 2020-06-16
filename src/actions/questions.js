import { saveQuestion } from '../utils/api'
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESION = "ADD_QUESTION"


export const handleNewQuestion = question => {
    return dispatch => {
        saveQuestion(question)
            .then(question => dispatch(addQuestion(question)));
    }
}
const addQuestion = question => ({
    type: ADD_QUESION,
    question
});
export const receiveQuestions = questions => ({
    type: RECEIVE_QUESTIONS,
    questions
})

