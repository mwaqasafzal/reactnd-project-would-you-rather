import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticateUser } from '../actions/authedUser'

class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    handleChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    }
    handleLogin = e => {
        console.log(e, this.props, this.state);
        e.preventDefault();
        if (this.props.users.includes(this.state.username) &&
            this.state.username === this.state.password)
            return authenticateUser(this.props.dispatch(authenticateUser(this.state.username)));

        alert("Username or password incorrect");
    }
    render() {
        const { username, password } = this.state;
        return (
            <div className="login">
                <h1 className="center title">Would You Rather!</h1>
                <h3 className="title">Login Here</h3>

                <div className="login-form">
                    <form onSubmit={this.handleLogin}>
                        <input
                            list="usersnames"
                            name="username"
                            placeholder="User Name"
                            value={this.state.user}
                            onChange={e => this.handleChange(e, 'username')} />
                        <datalist id="usersnames" >
                            {this.props.users.map(user => <option key={user} value={user} />)}
                        </datalist>
                        <br />
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={e => this.handleChange(e, 'password')} />
                        <br /><br />
                        <button
                            className="btn"
                            disabled={username.length == 0 || password.length == 0}
                        >Login</button>
                    </form>
                </div >
                <i>For testing purposes(user name and password are same)</i>
            </div>

        );
    }
}

const mapStateToProps = ({ users }) => ({
    users: Object.keys(users)
});
export default connect(mapStateToProps)(Login)