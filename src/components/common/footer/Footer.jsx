import React from 'react';
import { blog } from '../../../dummydata';
import "./footer.css";

const Footer = () => {
    return (
        <>
            <section className='newletter'>
                <div className="container flexSB">
                    <div className="left row">
                        <h1>Newsletter - Stay tune and get latest update.</h1>
                        <p>far far away, behind the word mountains</p>
                    </div>
                    <div className="right row">
                        <input type="text" placeholder='Enter your email..' />
                        <i class="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container padding">
                    <div className="box logo">
                        <h1>ACADEMIC</h1>
                        <span>online education & learning</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry of type and scrambled it to make a type specimen book.</p>
                        <i class="fa-brands fa-facebook icon"></i>
                        <i class="fa-brands fa-instagram icon"></i>
                        <i class="fa-brands fa-twitter icon"></i>
                        <i class="fa-brands fa-youtube icon"></i>
                    </div>
                    <div className='box link'>
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Courses</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className='box link'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Contact Us</li>
                            <li>Pricing</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy</li>
                            <li>Feedbacks</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>Recent Posts</h3>
                        {blog.slice(0, 3).map((val) => {
                            return (
                                <div className="items flexSB">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className="text">
                                        <span>
                                            <i className='fa fa-user'></i>
                                            <label htmlFor=''>{val.type}</label>
                                        </span>
                                        <span>
                                            <i className='fa fa-calendar-alt'></i>
                                            <label htmlFor=''>{val.date}</label>
                                        </span>
                                        <h4> {val.title} </h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="box last">
                        <h3>Have a Question?</h3>
                        <ul>
                            <li>
                                <i class="fa-solid fa-map"></i>
                                ka-38, Lake Drive Road, Dhaka-1212
                            </li>
                            <li>
                                <i class="fa-solid fa-phone"></i>
                                +8801531-784954
                            </li>
                            <li>
                                <i class="fa-solid fa-paper-plane"></i>
                                premabarua@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className='legal'>
                <p>
                    Copyright ©2023 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by PremaBarua
                </p>
            </div>
        </>
    )
}

export default Footer;
