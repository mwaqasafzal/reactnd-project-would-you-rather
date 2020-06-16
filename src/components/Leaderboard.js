import React from 'react'
import { connect } from 'react-redux'
import UserStats from './UserStats'

const Leaderboard = props => {

    return (
        <ul className="user-stats-list">
            {props.users.map(user => (
                <UserStats
                    key={user.id}
                    name={user.name}
                    avatar={user.avatarURL}
                    asked={user.questions}
                    answered={user.answers}
                    total={user.questions + user.answers}
                />))}
        </ul>
    );
}
const mapStateToProps = ({ users }) => {

    return {
        users: Object.values(users)
            .map(user => ({
                ...user,
                answers: Object.keys(user.answers).length,//we have an object of answers 
                questions: user.questions.length
            }))
            .sort((a, b) => (b.answers + b.questions) - (a.answers + a.questions))
    }

}
export default connect(mapStateToProps)(Leaderboard);