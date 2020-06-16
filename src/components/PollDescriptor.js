import React from 'react'
import { Link } from 'react-router-dom'

const PollDescriptor = props => {

    return (
        <li className="poll-descriptor">
            <Link to={`/questions/${props.id}`}>
                <div className="author-avatar">
                    <img alt={`avatar of @${props.author}`} src={props.avatar} />
                </div>
                <div className="poll-description">
                    <p>...{props.option}...</p>
                    <p style={{ textAlign: "right", fontStyle: "italic" }}>@{props.author}</p>
                </div>
            </Link>
        </li>);

}

export default PollDescriptor