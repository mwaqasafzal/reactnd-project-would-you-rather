
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA'



export const getData = () => {
  return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => ({
      users,
      questions
    }))
}

export const saveQuestion = question=> {
  return _saveQuestion(question)
    .then(formattedQuestion => formattedQuestion)
}

export const saveQuestionAnswer=info=>{
  return _saveQuestionAnswer(info);
}

