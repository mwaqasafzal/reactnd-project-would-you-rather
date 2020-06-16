import React from 'react'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { connect } from 'react-redux'

const Poll = props => {

    const handleChange = (e, option) => {
        e.preventDefault();
        const info = {
            qid: props.match.params.qid,
            authedUser: props.authedUser,
            answer: option

        }
        props.dispatch(handleSaveQuestionAnswer(info));
    }

    const { question, optionOneVotes, optionTwoVotes } = props;
    const { optionOne, optionTwo } = question;
    const optionOnePercent = (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2);
    const optionTwoPercent = (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2);

    return (
        <form>
            <input
                type="radio"
                onChange={e => handleChange(e, 'optionOne')}
                disabled={props.voted} />{optionOne.text}&nbsp;
                {props.voted && <span>{optionOnePercent}%</span>}
            <br />
            <input
                type="radio"
                onChange={e => handleChange(e, 'optionTwo')}
                disabled={props.voted} />{optionTwo.text}&nbsp;
                    {props.voted && <span>{optionTwoPercent}%</span>}
        </form>

    );
}

const mapStateToProps = ({ users, authedUser, questions }, { match }) => ({
    question: questions[match.params.qid],
    authedUser,
    voted: Object.keys(users[authedUser].answers).includes(match.params.qid),
    optionOneVotes: questions[match.params.qid].optionOne.votes.length,
    optionTwoVotes: questions[match.params.qid].optionTwo.votes.length
});
export default connect(mapStateToProps)(Poll);