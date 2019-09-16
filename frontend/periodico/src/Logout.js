import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.googleLogoutResponse = this.googleLogoutResponse.bind(this);
    }
    googleLogoutResponse(response) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.props.action(false);
    }
    render(){
        return(
            <GoogleLogout
                clientId="1036716135036-inhbrk3pjmi0hkv3b8gcughu89hihink.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={this.googleLogoutResponse}
            >
            </GoogleLogout>
        )
    }
}

export default Logout;