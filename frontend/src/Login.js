import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.googleLoginResponse = this.googleLoginResponse.bind(this);
  }
  googleLoginResponse(response) {
    localStorage.setItem("token", response.access_token);
    localStorage.setItem("userName", response.profileObj.name);
    localStorage.setItem("userEmail", response.profileObj.email);
    localStorage.setItem("userImage", response.profileObj.imageUrl);

    this.props.action(true);
  }
  render() {
    return (
      <GoogleLogin
        clientId="1036716135036-inhbrk3pjmi0hkv3b8gcughu89hihink.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.googleLoginResponse}
        onFailure={this.googleLoginResponse}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}

export default Login;
