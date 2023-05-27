import React, { Component } from 'react';

class LogOut extends Component {
    componentDidMount() {
        sessionStorage.removeItem("jwt");
        localStorage.removeItem("id");
        localStorage.removeItem("password");
        localStorage.removeItem("email");
        this.props.history.replace("/home")
        window.location = '/home'
    }
    render() {
        return (
            <></>
        );
    }
}

export default LogOut;