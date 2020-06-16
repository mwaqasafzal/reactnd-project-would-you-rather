import React, { Component } from 'react'
import { handleNewQuestion } from '../actions/shared'
import { connect } from 'react-redux'

class NewPoll extends Component {
    state = {
        option1: "",
        option2: ""
    }
    handleChange = (e, option) => {
        e.preventDefault();
        this.setState({ [option]: e.target.value.trim() })
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.option1.toLowerCase() === this.state.option2.toLowerCase())
            return alert("Both Option cannot be same");

        const question = {
            author: this.props.authedUser,
            optionOneText: this.state.option1,
            optionTwoText: this.state.option2
        }

        this.props.dispatch(handleNewQuestion(question));
        //right now we are doing this but for later...
        this.setState({ option1: "", option2: "" })
        //we will redirect to dashboard
    }

    render() {
        const { option1, option2 } = this.state;
        return (
            <div>
                <h3 className="center">Create New Poll!</h3>

                <form className="new-poll" onSubmit={this.handleSubmit}>
                    <h4>Would you rather!</h4>
                    <input
                        placeholder="Option 1"
                        value={option1}
                        onChange={e => this.handleChange(e, 'option1')}
                    />
                    <input
                        placeholder="Option 2"
                        value={option2}
                        onChange={e => this.handleChange(e, 'option2')}
                    />
                    <button
                        disabled={option1.length === 0 || option2.length === 0}>
                        Add Poll</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser
});
export default connect(mapStateToProps)(NewPoll)