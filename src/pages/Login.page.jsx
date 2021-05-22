import React, { Component } from "react";
import * as AUTH_SERVICE from "../service/auth.service";
import * as CONSTS from "../utils/consts";
import * as PATHS from "../utils/paths";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  componentDidMount = () => {
    console.log(this);
  };

  onChange = (event) => {
    //   setState({...state, [event.target.name]:event.target.value})
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    //   systemOverrideThing()
    e.preventDefault();

    AUTH_SERVICE.LOGIN(this.state)
      .then((response) => {
        console.log("response:", response);
        //   response.data.accessToken // sessionId

        localStorage.setItem(CONSTS.ACCESS_TOKEN, response.data.accessToken);
        this.props.authenticate(response.data.user);
        this.props.history.push(PATHS.HOME_PAGE);
      })
      .catch((err) => {
        console.error(err.response);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <button>LOGIN</button>
        </form>
      </div>
    );
  }
}

export default Login;
