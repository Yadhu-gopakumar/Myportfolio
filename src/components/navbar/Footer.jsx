import React from 'react';
import '../navbar/Navbar.css';

const Footer = () => {
    return (
        <section className='footer'>
            <p>Copyright &copy; 2024 Yadhu Gopakumar. All rights reserved.</p>
            <div className="footer-links">
                <a href="/privacy-policy.html">Privacy Policy</a> | 
                <a href="/terms-and-conditions.html"> Terms & Conditions</a> | 
                <a href="/refund-policy.html"> Refund Policy</a>
            </div>
        </section>
    );
}

export default Footer;
