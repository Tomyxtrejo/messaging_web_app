import React, { Component } from "react";
import InputField from "../commons/InputField";

import google from "../../utils/img/google.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../actions/authAction";
import PropTypes from "prop-types";

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

  // Trigger this function when user submits the form
  onSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.registerUser(newUser, this.props.history);
  };
  // Lifecycle to method to check if the user is already authenticated
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
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
              <button
                className="register_details_submit_button btn btn-primary btn-lg"
                onClick={this.onSubmit}
              >
                Register
              </button>
              <button className="register_details_google2 register_details_google  btn btn-primary btn-lg">
                <img src={google} className="register_details_google_icon" />
                LOGIN WITH GOOGLE
              </button>
            </div>
          </div>
          <div className="register_background col-md-6 " />
        </div>
      </div>
    );
  }
}

// Add prop types
Register.propTypes = {
  auth: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
