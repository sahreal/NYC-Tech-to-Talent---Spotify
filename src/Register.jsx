import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let key = event.target.name;
    let value = event.target.value;
    console.log(key, "KEY");
    console.log(value, "value");
    this.setState({ [key]: value });
  }

  handleSubmit() {
    console.log("clicked");
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              placeholder="Enter Email"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" onSubmit={this.handleSubmit}>
            Login
          </button>
        </form>
        <p>No Account? </p>
      </div>
    );
  }
}
export default Register;
