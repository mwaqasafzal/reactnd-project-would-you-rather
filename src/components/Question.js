import React from 'react'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { connect } from 'react-redux'
import { FormControl, Radio, RadioGroup, FormControlLabel } from '@material-ui/core'

const Question = props => {

    const handleChange = e => {

        const option = e.target.value;
        e.preventDefault();
        const info = {
            qid: props.match.params.qid,
            authedUser: props.authedUser,
            answer: option

        }
        props.dispatch(handleSaveQuestionAnswer(info));
    }

    const { question, optionOneVotes, optionTwoVotes, optionSelected } = props;
    const { optionOne, optionTwo } = question;
    const optionOnePercent = (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2);
    const optionTwoPercent = (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2);

    return (
        <div className="question">
            <h4 className="title center">Would Your Rather?</h4>
            <div className="questioner-question">
                <div className="questioner-profile">
                    <div className="avatar">
                        <img src={props.questionerAvatar} />
                    </div>
                </div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="option" name="option" onChange={handleChange}>
                        <div className="option">
                            <FormControlLabel
                                value="optionOne"
                                control={<Radio />}
                                disabled={props.voted}
                                checked={optionSelected === "optionOne"}
                                label={optionOne.text} />
                            {props.voted && (
                                <span className="option-stats">
                                    {optionOnePercent}%({optionOneVotes} Vote(s))
                            </span>)}
                        </div>
                        <div className="option">
                            <FormControlLabel
                                value="optionTwo"
                                control={<Radio />}
                                checked={optionSelected === "optionTwo"}
                                disabled={props.voted}
                                label={optionTwo.text} />
                            {props.voted && (
                                <span className="option-stats">
                                    {optionTwoPercent}% ({optionTwoVotes} Vote(s))
                            </span>)}
                        </div>

                    </RadioGroup>
                </FormControl>
            </div>

        </div>

    );
}

const mapStateToProps = ({ users, authedUser, questions }, { match }) => {
    const { qid } = match.params;
    const answers = Object.keys(users[authedUser].answers);
    const voted = answers.includes(qid);
    const question = questions[qid];
    const user = users[question.author];
    return {
        question,
        questionerAvatar: user.avatarURL,
        authedUser,
        voted,
        optionSelected: voted && users[authedUser].answers[qid],
        optionOneVotes: questions[qid].optionOne.votes.length,
        optionTwoVotes: questions[qid].optionTwo.votes.length
    }

}
export default connect(mapStateToProps)(Question);