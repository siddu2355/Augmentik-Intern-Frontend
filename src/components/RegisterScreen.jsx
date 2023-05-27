import React from 'react';
import Joi from 'joi-browser'
import Form from './Form';
import { registerUser } from '../services/userService';
class RegisterScreen extends Form {
    state = {
        data: {
            email: "",
            password: "",
        },
        errors: {}
    }
    schema = {
        email:Joi.string().email().required().label("Email"),
        password: Joi.string().min(5).required().label("password"),
    }
    doSubmit = async () => {
        try{
            const response = await registerUser(this.state.data)
            localStorage.setItem('id', response.data._id)
            localStorage.setItem('email', this.state.data.email)
            localStorage.setItem('password', this.state.data.password)
            alert("Registered Succesfully")
            this.props.history.replace('/add-profile')
            window.location = '/add-profile'
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                alert("Email already exists...")
            }
        }
    }
    render() {
        return (
            <div className='lrbg'>
                <div className="form-div">
                    <h3 className='lr-head'>Sign Up</h3>
                    <form onSubmit={this.handleSubmit} style={{
                        width:"100%"
                    }}>
                        {this.renderInput("email", "Email", 'input', "email")}
                        {this.renderInput("password", "Password", 'input', "password")}
                        {this.renderButton("Register")}
                    </form>
                    <p style={{fontSize:"medium", marginLeft:'20rem'}}>already a member? <a href="/login">Log In</a></p>
                </div>
            </div>
        );
    }
}

export default RegisterScreen;