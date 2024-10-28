import React, { useRef } from "react";
import './Contact.css';

import { FaPhone ,FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF,FaInstagram,FaLinkedinIn ,FaPaperPlane} from "react-icons/fa";

import emailjs from '@emailjs/browser';

const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_tr6a7zl', 'template_1nkg2nc', form.current, {
          publicKey: 'CbBt11Y2I-s-Cjr_b',
        })
        .then(
          () => {
            e.target.reset()
          alert("Email Sent !")
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <section id="contact" >

            <div className="cright">
                <div className="texts">
                    <div className="bigtext">Contact me</div>

                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="texts">
                        <div className="aboutcontents">Send Me A Note</div>

                    </div>

                    <div className="form-item">
                        <input type="text" name="from_name" required />
                        <label>Name:</label>
                    </div>
                    <div className="form-item">
                        <input type="text" name="your_email" required />
                        <label>Email:</label>
                    </div>
                    <div className="form-item">
                        <textarea className="" name="message" required></textarea>
                        <label>Message:</label>
                    </div>
                    <button className="submit-btn" type="submit" value="Send" >Send <span><FaPaperPlane /></span></button>
                </form>
            </div>
            <div className="cleft">

                <div className="clink">
                    <a href="tel:+918590659295"><div className="iconbox"><FaPhone /></div><span>+91 8590659295</span></a>
                </div>
                <div className="clink">
                    <a href="mailto:yadhugopakumar128@gmail.com"><div className="iconbox"><IoMdMail /></div><span>yadhugopakumar128@gmail.com</span></a>
                </div>
                Catch Me On
                <div className="socialmediaicon">
                    <a href="https://www.facebook.com/yadhu.gopakumar.9/"><div className="iconboxbottom"><FaFacebookF /></div></a>
                    <a href="https://wa.me/+918590659295"><div className="iconboxbottom"><FaWhatsapp /></div></a>
                    <a href="linkedin.com/in/yadhu-gopakumar-40a97520a"><div className="iconboxbottom"><FaLinkedinIn /></div></a>
                    <a href="https://www.instagram.com/yadh_u____/"><div className="iconboxbottom"><FaInstagram /></div></a>

                </div>

            </div>
        </section>
    );

}
export default Contact