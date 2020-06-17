import React from 'react'
import { connect } from 'react-redux'

const Profile = props => {
    return (
        <div className="profile">
            <div className="profile-avatar">
                <img src={props.avatar} />
            </div>
            <span className="profile-name">{props.name}</span>
        </div>
    );
}

const mapStateToProps = ({ users, authedUser }) => {
    const user = users[authedUser];
    return {
        name: user.name,
        avatar: user.avatarURL
    }
}
export default connect(mapStateToProps)(Profile);