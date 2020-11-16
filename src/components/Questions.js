import React, { Component } from "react";
import FilterQuestion from "./FilterQuestion";
import { connect } from "react-redux";
import QuestionDescriptor from "./QuestionDescriptor";
import { withRouter } from "react-router-dom";

class Questions extends Component {
  state = {
    filter: "unanswered",
  };
  componentDidMount() {}
  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };
  filterCheck = (question) => {
    const { optionOne, optionTwo } = question;

    if (this.state.filter === "unanswered") {
      return !(
        optionOne.votes.includes(this.props.authedUser) ||
        optionTwo.votes.includes(this.props.authedUser)
      );
    } else if (this.state.filter === "answered") {
      return (
        optionOne.votes.includes(this.props.authedUser) ||
        optionTwo.votes.includes(this.props.authedUser)
      );
    } else return true;
  };
  openQuestion = (id) => {
    this.props.history.push(`/questions/${id}`);
  };
  render() {
    return (
      <div className="questions-list">
        <h2 className="center title">Questions</h2>
        <div>
          <FilterQuestion
            handleFilterChange={this.handleFilterChange}
            value={this.state.filter}
          />
          <br />
          <div className="questions">
            <table>
              <tbody>
                {this.props.questions
                  .filter((question) => this.filterCheck(question))
                  .map((question) => (
                    <QuestionDescriptor
                      key={question.id}
                      author={question.author}
                      avatar={question.avatar}
                      option={question.optionOne.text}
                      openQuestion={this.openQuestion.bind(this, question.id)}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => ({
  questions: Object.values(questions)
    .map((question) => ({
      ...question,
      avatar: users[question.author].avatarURL,
    }))
    .sort((a, b) => questions[b.id].timestamp - questions[a.id].timestamp),
  authedUser,
});

export default withRouter(connect(mapStateToProps)(Questions));
