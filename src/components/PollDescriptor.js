import React from 'react'

const PollDescriptor = props => {
    return (
        <li className="poll-descriptor">
            <div className="author-avatar">
                <img alt={`avatar of @${props.author}`} src={props.avatar} />
            </div>
            <div className="poll-description">
               <p>...{props.option}...</p> 
               <p style={{textAlign:"right",fontStyle:"italic"}}>@{props.author}</p>
            </div>
            
        </li>);

}

export default PollDescriptor