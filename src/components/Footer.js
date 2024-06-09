// src/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
                <div className='Footers1'>

                           
                            <div class="cta-text">
                                <i class="fas fa-map-marker-alt"></i> 
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div> 
                            <div class="cta-text">
                                <i class="fas fa-phone"></i>
                                <h4>Call us</h4>
                                <span>9876543210 </span>
                            </div>
                            <div class="cta-text">
                                <i class="far fa-envelope-open"></i> 
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div> 
                </div>  
                <div className='Footers2'>
                        <div className='Footers2-s1'>
                          
                            

                            <div className="Footers2-s1p1">
                                <span>Follow us</span>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                            
                           
                        </div>
                        <div className='Footers2-s1p2'>
                              <h2>Useful Links</h2>
                           
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                
                            </ul>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                           <div className='Footers2-s1p3'>
                            <div class="Footers2-s1p2">
                                <h2>Queries</h2>
                            </div>
                            <div class="footer-text ">
                                <p>Don’t miss to ask queries to our new feeds, kindly fill the form below.</p>
                            </div> 
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address" />
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                            </div>      
                   </div>

              
    </div>
  );
}

export default Footer;
