import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TermsAndConditions = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Terms and Conditions</h2>
            <p>
                Welcome to our website. By using this site, you agree to comply with our terms and 
                conditions. If you do not agree, please do not use our services.
            </p>
            <h4>Use of Services</h4>
            <p>
                You agree to use our website legally and responsibly. Any misuse, including fraudulent 
                activities, will result in termination of access.
            </p>
            <h4>Limitation of Liability</h4>
            <p>
                We are not responsible for any losses or damages resulting from the use of our services.
            </p>
            <p>For inquiries, email us at <strong>support@yourdomain.com</strong></p>
        </div>
    );
}

export default TermsAndConditions;
