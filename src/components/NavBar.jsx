import React, { Component } from 'react';
import logo from "../images/logo.jpg"
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        const {user} = this.props
        return (
            <nav className='nav'>
                <img src={logo} alt="The logo of climp.co" className='nav-img'></img>
                <div style={{flexGrow:1}}></div>
                <ul style={{display:"flex"}}>
                    {user.user_id === -1 && (
                        <React.Fragment>
                            <li><div className='nav-link'><Link className='nav-link-text' to="#" >Business</Link></div></li>
                            <li><div className='nav-link'><Link className='nav-link-text' to="#" >How it Works</Link></div></li>
                            <li><div className='nav-link'><Link className='nav-link-text' to="#" >About Us</Link></div></li>
                            <li><div className='nav-link'><Link className='nav-link-text' to="#" >Pricing</Link></div></li>
                            <li><div className='nav-link'><Link to="/login" ><span className="btn btn--secondary btn--large" href="/login">Get Started</span></Link></div></li>
                        </React.Fragment>
                    )}
                    {user.user_id !== -1 && <><div style={{ flexGrow: 1 }}></div>
                    <div style={{ flexGrow: 1 }}></div>
                    <div style={{ flexGrow: 1 }}></div>
                    <div style={{flexGrow:1}}></div></>}
                    {user.user_id !== -1 &&<li><div className='nav-link'><Link className='nav-link-text' to="/log-out">Log Out</Link></div></li>}
                </ul>
            </nav>
        );
    }
}

export default NavBar;