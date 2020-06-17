import React from 'react'
import { connect } from 'react-redux'
import UserStats from './UserStats'

const Leaderboard = props => {

    return (
        <div className="leadersboard">
            <h2 className="center title">Leadersboard</h2>
            <table class="leadersboard-rating">
                <tbody>
                    {props.users.map(user => (
                        <UserStats
                            key={user.id}
                            name={user.name}
                            avatar={user.avatarURL}
                            asked={user.questions}
                            answered={user.answers}
                            total={user.questions + user.answers}
                        />))}
                </tbody>
            </table>
        </div>

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