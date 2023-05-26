import React, { Component } from 'react';
import phone from "../images/phone.png"
import logo from "../images/logo.jpg"
import databases from "../images/databases.png"
import { Link } from 'react-router-dom';
 

class Home extends Component {
    render() {
        return (<div className='main-screen'></div>   );
    }
}
{/* //                 <section className="block block--blue">
//                     <div className="grid grid--1X2">
//                         <header className="block__header hero__content">
//                             <h1 className="hero__heading" >Big Data and Software Development</h1>
//                             <p className="hero__tagline" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sit quo aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint a delectus, quis sapiente officiis.</p>
//                            <div class="input-group" data-aos="flip-down">
//         <input type="text" class="input-a" placeholder="Input Your Email" />
//         <span class="icon-container" >
//                       <Link to="#" ><a className="btn btn--secondary btn--large" href="#" >Get Started</a></Link>
//         </span>
//       </div>
//                 </header>
//                         <div>
//                             <img
//                                 src={phone}
//                                 alt="image" /> */}
                            
//                         </div>
//                     </div>
//                 </section>
    
//     {/* <div className="block container feature" >
//       <header className="block__header" >
//         <h2>Devolopement</h2>
//       </header>
//       <div className="grid grid--1X2">
//         <div className="feature__image">
//           <img
//             src="images/frond.jpg"
//             alt="a beautiful frontend"
            
//           />
//         </div>
//         <div
//           className="feature__content"
          
//           style="margin-left: 1.5rem; padding-top: 4rem"
//         >
//           <h2 className="feature__heading">Front-End Devolopement</h2>
//           <p className="feature__text">
//             Front-end web development is the development of the graphical user
//             interface of a website, through the use of HTML, CSS, and
//             JavaScript, so that users can view and interact with that website.
//           </p>
//           <a href="codeSnippets/learnMore2.html" className="link link-arrow"
//             >learn more</a
//           >
//         </div>
//       </div>
      
//                 </div> */}
//     {/* card component */}
//             <section className="block" >
//       <div className="card testimonial" style={{
//               background:"#022F96"
//             }} >
//         <div className="grid grid--1X2">
//           <div className="quote">
//             <div className="testimonial-block__footer">
//               <div className="media">
//                 <div className="media__body">
//                   <h3 className="media__title quote__title quote__author" >
//                     <span className="line" style={{
//                               color: "dodgerblue",
//                       width:"15px"
//             }} >-</span> <p style={{
//                               color: "#fff",
//               fontSize:40
//             }} >See Impactful Results with an easy integration.</p>
//                   </h3>
//                 </div>
//               </div>
//             </div>
//             <p className="quote__text">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam impedit perspiciatis commodi aperiam officia quisquam voluptatibus, voluptatem facilis repudiandae incidunt.
//             </p>
//         </div>
//           <div className="testimonial__image">
//             <img src={databases} alt="My Image" data-aos="flip-right" />
//           </div>               
//         </div>
//       </div>
//     </section>

// {/* feedback component */}
//     {/* <div className="callout callout--primary" data-aos="zoom-out-down">
//       <div className="grid grid--1X2">
//         <div className="callout__content">
//           <h2 className="callout__heading">Feedback</h2>
//           <p>Please Give Me Your Valuable Feedback</p>
//         </div>
//         <a href="#" className="btn btn--secondary btn--large">feedback</a>
//       </div>
//     </div> */}

//     {/* inputgroup */}
//     {/* <div class="input-group" data-aos="flip-down">
//         <input type="text" class="input-a" placeholder="Types Of Chicken" />
//         <span class="icon-container">
//           <svg
//             class="icon"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 21.8 23.8"
//           >
//             <path
//               d="M11,17.9a8.7,8.7,0,0,0,.8,4.8,1,1,0,0,0,1.2.4.8.8,0,0,0,.4-1.2,8.3,8.3,0,0,1-.7-3.8,7.6,7.6,0,0,1,15.2,1.1A7.7,7.7,0,0,1,16.1,25a.8.8,0,0,0-1.2.2.9.9,0,0,0,.2,1.3A10,10,0,0,0,19.6,28a9.3,9.3,0,0,0,6.1-1.7l5.5,6.4a.9.9,0,0,0,.6.3.7.7,0,0,0,.7-.2.9.9,0,0,0,.1-1.2L27,25.2a8.9,8.9,0,0,0,2.6-5.8A9.3,9.3,0,1,0,11,17.9Z"
//               transform="translate(-10.9 -9.3)"
//             />
//           </svg>
//         </span>
//       </div> */}
//     {/* footer */}
//     <footer className="block block--dark footer">
//       <div className="container grid footer__grids">
//         <section className="collapsible footer__section">
//           <header className="collapsible__header">
//           </header>
//           <div>
//             <ul className="list">
//               <li><a href="#">FACEBOOK</a></li>
//               <li><a href="#">WALMART</a></li>
//               <li><a href="#">FLIPKART</a></li>
//               <li><a href="#">DISCORD</a></li>
//             </ul>
//           </div>
//         </section>
//         <section className="collapsible footer__section">
//           <header className="collapsible__header">
            
//           </header>
//           <div>
//             <ul className="list">
//               <li><a href="#">FACEBOOK(Web Version)</a></li>
//               <li><a href="#">NETFLIX</a></li>
//               <li><a href="#">WHATSAPP(Web Version)</a></li>
//               <li><a href="#">PINTREST</a></li>
//             </ul>
//           </div>
//         </section>
//         <section className="collapsible footer__section">
//           <header className="collapsible__header">
//             </header>
//           <div>
//             <ul className="list">
//               <li><a href="#">YOUTUBE</a></li>
//               <li><a href="#">INSTAGRAM</a></li>
//               <li><a href="#">SPOTIFY</a></li>
//               <li><a href="#">BitBucket</a></li>
//             </ul>
//           </div>
//         </section>
//         <section className="collapsible footer__section">
//           <header className="collapsible__header">
//             </header>
//           <div className="">
//             <ul className="list">
//               <li><a href="#">PayPal</a></li>
//               <li><a href="#">Forbes</a></li>
//               <li><a href="#">Samsung</a></li>
//               <li><a href="#">Deutsche Bank</a></li>
//             </ul>
//           </div>
//         </section>
//         <section className="footer__brand">
//           <span className="icon-container icon-container--white"
//             >                <img src={logo} alt="The logo of climp.co" className='nav-img'></img>

//           </span>
//           <p className="footer__copyright">
//             &copy;2022 Chemistry-Presentation All Rights Reserved for SIDDU(not
//             for anyone else!).
//           </p>
//         </section>
//       </div>
//     </footer>      
       
       

export default Home;