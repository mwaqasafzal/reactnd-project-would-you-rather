import React from 'react'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { connect } from 'react-redux'


const Poll = props => {

    const handleChange = (e,option) => {
        e.preventDefault();
        const info = {
            qid: props.params.qid,
            authedUser: props.authedUser,
            answer: option

        }
        props.dispatch(handleSaveQuestionAnswer(info));
    }
    
    const { optionOne, optionTwo} = props.question;
    return (
        <div>
            <form>
                <input
                    type="radio"
                    onChange={e => handleChange(e, 'optionOne')}
                    disabled={props.voted} />{optionOne.text}&nbsp;
                    {props.voted && <span>stats</span>}
                <br />
                <input
                    type="radio"
                    onChange={e => handleChange(e, 'optionTwo')}
                    disabled={props.voted} />{optionTwo.text}&nbsp;
                    {props.voted && <span>stats</span>}
            </form>
        </div>
    );
}

const mapStateToProps = ({ users, authedUser, questions }, { params }) => ({
    question: questions[params.qid],
    authedUser,
    voted: Object.keys(users[authedUser].answers).includes(params.qid)
});
export default connect(mapStateToProps)(Poll);