import React from 'react';
import Joi from 'joi-browser'
import Form from './Form';
import jwt_decode from 'jwt-decode';
import { LoginUser } from '../services/userService';

class LoginScreen extends Form {
    email = React.createRef()
    password = React.createRef()
    state = { 
        data: {
            email:"",
            password:"",
        },
        errors:{}
    }
    schema = {
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().min(5).required().label("Password"),
    }
    doSubmit = async () => {
        try {
            const response = await LoginUser(this.state.data)
            sessionStorage.setItem("jwt", response.data)
            const user = jwt_decode(response.data);
            if (user.isAdmin) {
                this.props.history.replace("/details")
                window.location = "/details"
                return
            }
            this.props.history.replace("/home")
            window.location = "/home"
            alert("Succesfully Logged In.")
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                alert(ex.response.data)
            }
        }
    }
    render() {
        return (
            <div className='lrbg'>
                <div className="form-div">
                    <h3 className='lr-head'>Log In</h3>
                    <form onSubmit={this.handleSubmit} style={{
                        width:"100%"
                    }}>
                        {this.renderInput("email", "Email", 'input', 'text')}
                        {this.renderInput("password", "Password", 'input', "password",)}
                        {this.renderButton("Login")}
                    </form>
                    <p style={{fontSize:"medium"}}>Not a member already? <a href="/register">Sign Up</a></p>
                    <a style={{fontSize:"medium", marginLeft:"25rem"}} href='/forgot-password'>Forgot Password?</a>
                </div>
            </div>
        );
    }
}

export default LoginScreen;