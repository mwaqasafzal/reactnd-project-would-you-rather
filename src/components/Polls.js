import React, { Component } from 'react'
import FilterPoll from './FilterPoll'
import {connect} from 'react-redux'
import PollDescriptor from './PollDescriptor'

class Polls extends Component {
    state = {
        filter: "unanswered"
    }
    componentDidMount(){
        console.log(this.props);
    }
    handleFilterChange = e => {
        this.setState({ filter: e.target.value })
    }
    filterCheck=question=>{

        const {optionOne,optionTwo}=question;
        
        if(this.state.filter==="unanswered"){
            return !(optionOne.votes.includes(this.props.authedUser)||
                    optionTwo.votes.includes(this.props.authedUser));
        }
        else if(this.state.filter==="answered"){
            return (optionOne.votes.includes(this.props.authedUser)||
            optionTwo.votes.includes(this.props.authedUser));
        }
        else 
            return true;
    }       
    render() {
        return (
            <div className="polls">
                <h3 className="center">Polls</h3>
                <FilterPoll
                    handleFilterChange={this.handleFilterChange}
                    value={this.state.filter} />
                <ul className="polls-descriptor-list">
                    {this.props.questions.filter(question=>this.filterCheck(question))
                                        .map(question=>(<PollDescriptor
                                                     key={question.id}
                                                     author={question.author} 
                                                     avatar={question.avatar}
                                                     option={question.optionOne.text} />))}
                </ul>
               
            </div>
        );
    }
}

const mapStateToProps=({users,questions,authedUser})=>({
    questions:Object.values(questions)
                    .map(question=>({
                            ...question,
                            avatar:users[question.author].avatarURL
                        }))
                    .sort((a,b)=>questions[b.id].timestamp-questions[a.id].timestamp),
    authedUser
    });

export default connect(mapStateToProps)(Polls)