import React, { Component } from "react";
import InputField from "../commons/InputField";
import google from "../../utils/img/google.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/authAction";

class Login extends Component {
  // State goes here
  state = {
    email: "",
    password: ""
  };

  // onChange method to update state
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // Trigger this function when user submits the form
  onSubmit = event => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };

  // Lifecycle method to check if the user is authenticated
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }

    if (nextProps.error) {
      this.setState({ errors: nextProps.error });
    }
  }

  render() {
    return (
      <div className="register">
        <div className="row">
          <div className="register_details col-md-6">
            <div className="register_details_heading">Sign in</div>
            <div className="register_details_subheading">
              Sign in and start managing your chats.
            </div>
            <div className="register_details_inputs">
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
                type="password"
              />
              <div className="login_details_extra_details">
                <div className="login_details_checkbox">
                  {" "}
                  <input type="checkbox" id="box-3" />
                  <label for="box-3" className="checkbox_label">
                    Remember me
                  </label>
                </div>
                <div className="login_details_forgot">Forgot password?</div>
              </div>

              <button
                className="register_details_submit_button btn btn-primary btn-lg"
                onClick={this.onSubmit}
              >
                Login
              </button>
              <button className="register_details_google btn btn-primary btn-lg">
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
Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
