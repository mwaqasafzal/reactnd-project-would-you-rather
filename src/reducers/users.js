import * as actionTypes from '../actions/users'


export default (state = {}, action) => {

    switch (action.type) {

        case actionTypes.RECEIVE_USERS:
            return action.users;
        default:
            return state;
    }
}