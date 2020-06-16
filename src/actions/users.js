
export const RECEIVE_USERS = "RECEIVE_USERS"
export const SAVE_ANSWER = "SAVE_ANSWER"
export const NEW_QUESTION = "NEW_QUESTION"

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})
export const saveAnswer = info => ({
    type: SAVE_ANSWER,
    info
});

export const newQuestion = question => ({
    type: NEW_QUESTION,
    question
})



