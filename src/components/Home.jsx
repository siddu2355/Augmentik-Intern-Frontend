import React, { Component } from 'react';
import phone from "../images/phone.png"
import logo from "../images/logo.jpg"
import databases from "../images/databases.png"
import coolguy from "../images/coolguy.jpg"
import { Link } from 'react-router-dom';
 

class Home extends Component {
    render() {
        return (
            <div className='main-screen'>
                <section className="block block--blue">
    <div className="grid grid--1X2">
        <header className="block__header hero__content">
            <h1 className="hero__heading">Big Data and Software Development</h1>
            <p className="hero__tagline">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sit quo
                aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint a delectus, quis
                sapiente officiis.</p>
            <div className="input-group">
                <input type="text" className="input-a" placeholder="Input Your Email" />
                <span className="icon-container">
                    <Link to="#"><span className="btn btn--secondary btn--large" href="#">Get Started</span></Link>
                </span>
            </div>
        </header>
        <div>
            <img src={phone} alt="mine" />
        </div>
    </div>
</section>
                
                 <div className="block container feature" >
                   <div className="grid grid--1X2">
                     <div className="feature__image">
                       <img
                         src={coolguy}
                         alt="a beautiful frontend"
                        style={{height:"500px"}}
                       />
                     </div>
                     <div
                       className="feature__content"
                      
                    style={{marginLeft: '1.5rem', paddingTop: '4rem'}}
                     >
                       <h2 className="feature__heading">Automate Your Bussiness Deep'n Your Development.</h2>
                       <p className="feature__text">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptates quas cupiditate eos quos nulla deleniti sapiente quibusdam excepturi iste.
                       </p>
                       <a href="/" className="link link-arrow"
                         >learn more</a>
                     </div>
                   </div>
            </div> 
                 {/* card component */}
                         <section className="block" >
                   <div className="card testimonial" style={{
                           background:"#022F96"
                         }} >
                     <div className="grid grid--1X2">
                       <div className="quote">
                         <div className="testimonial-block__footer">
                           <div className="media">
                             <div className="media__body">
                               <h3 className="media__title quote__title quote__author" >
                                 <span className="line" style={{
                                           color: "dodgerblue",
                                   width:"15px"
                         }} >-</span> <p style={{
                                           color: "#fff",
                           fontSize:40
                         }} >See Impactful Results with an easy integration.</p>
                               </h3>
                             </div>
                           </div>
                         </div>
                         <p className="quote__text">
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam impedit perspiciatis commodi aperiam officia quisquam voluptatibus, voluptatem facilis repudiandae incidunt.
                         </p>
                     </div>
                       <div className="testimonial__image">
                    <img src={databases} alt="My ii" style={{
                      height: "50rem",
                      left: "150px",
                      bottom:"50px"
                         }} />
                       </div>               
                     </div>
                   </div>
                 </section>

                 {/* footer */}
            <footer className="block block--blue footer" style={{background:"#022F96", height:"50vh", paddingTop:"3rem"}}>
              <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:"space-around"}}>
                    <span className="icon-container icon-container--white"
                      >                <img src={logo} alt="The logo of climp.co" className='nav-img'></img>
                </span>
                <div className="input-group" style={{height:"65px", width:"", fontSize:'1px'}}>
                <input type="text" className="input-a" placeholder="Your Email" />
                <span className="icon-container">
                    <Link to="#"><span className="btn btn--secondary btn--large"  style={{ color:'#fff'}} href="#">Subscribe</span></Link>
                </span>
            </div>
                       </div>
                   <div className="container grid footer__grids">
                     <section className="collapsible footer__section">
                       
                       <div>
                         <ul className="list">
                           <li><a href="/">SOFTWARE</a></li>
                           <li><a href="/">HARDWARE</a></li>
                           <li><a href="/">COMPANY</a></li>
                           <li><a href="/">PROGRAMS</a></li>
                         </ul>
                       </div>
                     </section>
                     <section className="collapsible footer__section">
                       <div>
                         <ul className="list">
                           <li><a href="/">ABOUT US</a></li>
                           <li><a href="/">HOW IT WORKS</a></li>
                           <li><a href="/">CONTACT</a></li>
                           <li><a href="/">BLOG</a></li>
                         </ul>
                       </div>
                     </section>
                     <section className="collapsible footer__section">
                       <div>
                         <ul className="list">
                           <li><a href="/">TWITTER</a></li>
                           <li><a href="/">INSTAGRAM</a></li>
                           <li><a href="/">FACEBOOK</a></li>
                           <li><a href="/">LINKEDIN</a></li>
                         </ul>
                       </div>
                     </section>
                     
                     <section className="footer__brand">
                       
                  <p className="footer__copyright" style={{
                    textAlign: 'left',
                    marginTop:"2rem"
                  }}>
                         &copy; Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                       </p>
                     </section>
                   </div>
                 </footer>
            </div >   
        );
    }
}  

export default Home;