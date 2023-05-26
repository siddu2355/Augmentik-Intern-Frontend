import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import NotFound from './components/NotFound';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from "./components/RegisterScreen";
import ProfileForm from './components/ProfileForm';
import LogOut from './components/LogOut';
import jwt_decode from 'jwt-decode';

class App extends Component {
  state = {
    user: {
      user_id: -1,
    },
    email :localStorage.getItem("email") || -1
  }
  componentWillMount() {
    try {
      const jwt = sessionStorage.getItem("jwt");
      const user = jwt_decode(jwt);
      localStorage.setItem("id", user.user_id);
      this.setState({ user });
    } catch (ex) {}
  }
  render() {
    const { user, email } = this.state
    return (
    <React.Fragment>
        <NavBar
          user={this.state.user}
        />
      <Switch>
        {user.user_id !== -1 && (<Route path="/log-out" component={LogOut} />)}
        {user.user_id === -1 && (<Route path="/login" component={LoginScreen} />)}
        {user.user_id === -1 && (<Route path="/register" component={RegisterScreen} />)}
        {user.user_id === -1 && (<Redirect from='/' exact to='/home' />)}
        {user.user_id === -1 && (<Route path="/add-profile" component={(props) => <ProfileForm user={user} email={email} {...props} />} />)}
        <Route path="/home" component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found"/>
      </Switch>
    </React.Fragment>
  );
}
}

export default App;