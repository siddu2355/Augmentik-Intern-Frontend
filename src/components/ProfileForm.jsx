import React from 'react';
import Form from './Form';
import Joi from "joi-browser";
import { registerProfile } from '../services/profileService';
import {LoginUser} from "../services/userService"

class ProfileForm extends Form {
    state = {
        data: {
            name: "",
            age: 1,
            gender: "",
            phone:"",
            email: localStorage.getItem("email")
        },
        errors: {}
    }
    schema = {
        name: Joi.string().max(255).required().label("First Name"),
        age: Joi.number().required().label("Age"),
        gender: Joi.string().max(20).required().label("Gender"),
        phone: Joi.string().min(10).max(10).required().label("Phone"),
        email: Joi.string().email().required(),
    }
    doSubmit = async () => {
        try {
            try {
                const email = localStorage.getItem("email")
                const password = localStorage.getItem("password")
                const response = await LoginUser({ 'email': email, 'password': password })
                sessionStorage.setItem("jwt", response.data)
                await registerProfile(this.state.data)
                alert("Details Submitted Succesfully")
                this.props.history.replace("/home")
                window.location = "/home"
            }
            catch (ex){
                if (ex.response && ex.response.status === 400) {
                    alert("age must be greater than or equal to 1 and must be less than 110.")
                }
            }
        } catch {
            alert("an unexpected Error occured")
        }
    }
    async componentDidMount() {
        const { email } = this.props
        const ans = { ...this.state.data }
        ans.email = email;
        this.setState({ data: ans })
    }
    render() {
        return (
                <div className='lrbg'>
                <div className="form-div">
                    <h3 className='lr-head'>Profile</h3>
                    <form onSubmit={this.handleSubmit} style={{
                        width:"100%"
                    }}>
                        {this.renderInput("name", "Name", 'input', 'text')}
                        {this.renderInput("age", "Age", 'input', 'text')}
                        {this.renderInput("gender", "Gender", 'input', 'text')}
                        {this.renderInput("phone", "Phone", 'input', 'text')}
                        {this.renderButton("SAVE")}
                    </form>
                </div>
            </div>
        );
    }
}

export default ProfileForm;