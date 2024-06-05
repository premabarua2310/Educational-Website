import React from 'react';
import "./contact.css";
import Back from '../common/back/Back';

const Contact = () => {
    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.483354071609!2d90.42399291481631!3d23.801405284564332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bba6ffeb31%3A0xdb02a491b63b8494!2sUniversity%20of%20Information%20Technology%20and%20Sciences%20(UITS)!5e0!3m2!1sen!2sbd!4v1678101368763!5m2!1sen!2sbd"
  return (
    <>
      <Back title="Contact Us" />
      <section className="contact padding">
        <div className="container shadow flexSB">
            <div className="left row">
                <iframe src={map}></iframe>
            </div>
            <div className="right row">
                <h1>Contact Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="items grid2">
                    <div className="box">
                        <h4>ADDRESS: </h4>
                        <p>Baridhara, Gulshan, Dhaka-1212</p>
                    </div>
                    <div className="box">
                        <h4>Email: </h4>
                        <p>premabarua@gmail.com</p>
                    </div>
                    <div className="box">
                        <h4>PHONE: </h4>
                        <p>+880153-1784954</p>
                    </div>
                </div>

                <form action="">
                    <div className="flexSB">
                        <input type="text" placeholder='Enter Your Name' />
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <input type="email" placeholder='Subject' />
                    <textarea cols="30" rows="10">
                        Create a message here...
                    </textarea>
                    <button className='primary-btn'>SEND MESSAGE</button>
                </form>

                <h3>Follow Us Here</h3>
                <span>FACEBOOK TWITTER INSTRAGRAM LINKEDIN</span>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
