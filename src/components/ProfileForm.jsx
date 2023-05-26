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
                localStorage.removeItem("email")
                localStorage.removeItem("password")
                await registerProfile(this.state.data)
                alert("Details Submitted Succesfully")
                this.props.history.replace("/home")
                window.location = "/home"
            }
            catch {
                alert("an unexpected Error occured")
                this.props.history.replace("/login")
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors }
                // errors.id = ex.response.data.id
                // errors.github_username = ex.response.data.github_username
                // errors.codechef_username = ex.response.data.codechef_username
                // errors.codeforces_username = ex.response.data.codeforces_username
                // errors.leetcode_username = ex.response.data.leetcode_username
                // errors.linkedin_username = ex.response.data.linkedin_username
                // errors.hackerrank_username = ex.response.data.hackerrank_username
                // errors.user_id = ex.response.data.user_id
                // this.setState({ errors })
                console.log()(errors)
            }
        }
    }
    async componentDidMount() {
        const { email } = this.props
        const ans = { ...this.state.data }
        ans.email = email;
        this.setState({ data: ans })
    }
    render() {
        console.log(this.state.data)
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