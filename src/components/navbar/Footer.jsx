import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <p>Copyright &copy; 2024 Yadhu Gopakumar. All rights reserved.</p>
            <div>
                <a href="/privacy-policy" className="text-white mx-2">Privacy Policy</a> | 
                <a href="/terms-and-conditions" className="text-white mx-2">Terms & Conditions</a> | 
                <a href="/refund-policy" className="text-white mx-2">Refund Policy</a>
            </div>
        </footer>
    );
}

export default Footer;
