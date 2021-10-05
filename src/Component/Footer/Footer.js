import React from 'react';

const Footer = () => {
    return (
        <div className="mb-3 rounded text-info container text-center  mt-4 p-4 bg-secondary">
            <div className=" d-flex justify-content-between align-items-center">
                <div>
                    <h3>Contact us</h3>
                    <h6>E-mail: learnQuran@gmail.com</h6>
                    <h6>Phone: +880175075155</h6>
                </div>
                <div>
                    <h3>Information</h3>
                    <h6>Plans and Pricing</h6>
                    <h6>Sell Your Content</h6>
                </div>
            </div>
            <h6>[Copyright: Learn-Quran Academy]</h6>
        </div>
    );
};

export default Footer;