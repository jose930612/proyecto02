import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.googleLoginResponse = this.googleLoginResponse.bind(this);
    }
    googleLoginResponse(response) {
        // console.log(response.tokenObj);
        // console.log(response.tokenObj.session_state.extraQueryParams.authuser);
        // console.log(response.tokenObj.access_token);
        // console.log(response.profileObj);
        // console.log(response.profileObj.name);
        // console.log(response.profileObj.email);
        // console.log(response.profileObj.imageUrl);
        localStorage.setItem('token', response.access_token)
        
        localStorage.setItem('userName', response.profileObj.name);
        localStorage.setItem('userEmail', response.profileObj.email);
        localStorage.setItem('userImage', response.profileObj.imageUrl);
        
        this.props.action(true);
    }
    render(){
        return(
            <GoogleLogin
                clientId="1036716135036-inhbrk3pjmi0hkv3b8gcughu89hihink.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.googleLoginResponse}
                onFailure={this.googleLoginResponse}
                cookiePolicy={'single_host_origin'}
            />
        )
    }
}

export default Login;