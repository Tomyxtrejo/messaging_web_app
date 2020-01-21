import React, { Component } from "react";
import InputField from "../commons/InputField";

class Register extends Component {
  // State goes here
  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  // onChange method to update state
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="register">
        <div className="row">
          <div className="register_details col-md-6">
            <div className="register_details_heading">Sign up</div>
            <div className="register_details_subheading">
              Sign up and start managing your chats.
            </div>
            <div className="register_details_inputs">
              <InputField
                name="name"
                value={this.state.name}
                placeholder="Enter Full Name"
                onChange={this.onChange}
                label="Full Name"
              />
              <InputField
                name="email"
                value={this.state.email}
                placeholder="Enter Email Address"
                onChange={this.onChange}
                label="Email Address"
              />
              <InputField
                name="password"
                value={this.state.password}
                placeholder="Enter Password"
                onChange={this.onChange}
                label="Password"
              />
              <InputField
                name="password2"
                value={this.state.password2}
                placeholder="Confirm Password"
                onChange={this.onChange}
                label="Confirm Password"
              />
              <button className="register_details_submit_button btn btn-primary btn-lg">
                Register
              </button>
            </div>
          </div>
          <div className="register_background col-md-6 " />
        </div>
      </div>
    );
  }
}

export default Register;
