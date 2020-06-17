import React from 'react'

const QuestionDescriptor = props => {

    return (
        <tr onClick={props.openQuestion}>
            <td >
                <div className="author-avatar">
                    <img alt={`avatar of @${props.author}`} src={props.avatar} />
                </div>
                <p>@{props.author}</p>

            </td>
            <td >
                <p>...{props.option}...</p>

            </td>
        </tr>
    );

}

export default QuestionDescriptor