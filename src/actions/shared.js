import { getData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, saveAnswer, newQuestion } from './users';
import { receiveQuestions, updateQuestionAnswers, addQuestion } from './questions'
import { authenticateUser } from './authedUser'

const user = "tylermcginnis";

export const loadData = () => {
    return dispatch => {
        getData()
            .then(({ questions, users }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(authenticateUser(user))
            })
    }

}

export const handleNewQuestion = question => {
    return dispatch => {
        saveQuestion(question)
            .then(question => {
                const { id: qid, author: authedUser } = question;
                dispatch(addQuestion(question));
                dispatch(newQuestion({ qid, authedUser }));

            });
    }
}

export const handleSaveQuestionAnswer = info => {

    return dispatch => {
        saveQuestionAnswer(info)
            .then(() => {
                dispatch(saveAnswer(info))
                dispatch(updateQuestionAnswers(info))
            })
    }
}