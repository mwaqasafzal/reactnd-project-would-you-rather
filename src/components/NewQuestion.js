import React, { Component } from 'react'
import { handleNewQuestion } from '../actions/shared'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    state = {
        option1: "",
        option2: ""
    }
    handleChange = (e, option) => {
        e.preventDefault();
        this.setState({ [option]: e.target.value })

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
        this.props.history.replace("/");
    }

    render() {
        const { option1, option2 } = this.state;
        return (
            <div className="new-question">
                <h2 className="center title" >Create New Question!</h2>

                <form onSubmit={this.handleSubmit}>
                    <h3 style={{ color: "#3282b8" }}>Would you rather!</h3>
                    <input
                        placeholder="Option 1"
                        value={option1}
                        onChange={e => this.handleChange(e, 'option1')}
                        className="option"
                    />
                    <br />
                    <input
                        placeholder="Option 2"
                        value={option2}
                        onChange={e => this.handleChange(e, 'option2')}
                        className="option"
                    />
                    <br />
                    <button
                        disabled={option1.length === 0 || option2.length === 0}
                        className="btn"
                    >
                        Add Question</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser
});
export default connect(mapStateToProps)(NewQuestion)