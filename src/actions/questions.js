export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const UPDATE_QUESTION_ANSWERS = "UPDATE_QUESTION_ANSWERS"


export const addQuestion = question => ({
    type: ADD_QUESTION,
    question
});
export const receiveQuestions = questions => ({
    type: RECEIVE_QUESTIONS,
    questions
})

//numbers of answers or votes for particular answer
export const updateQuestionAnswers = info => ({
    type: UPDATE_QUESTION_ANSWERS,
    info
});