import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <section className="contact mt-5 mb-5 pb-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="contact-item">
                            <div className="contact-text">
                                <h1 className="text-center">Get your design right now</h1>
                                <p className="text-center text-secondary">Be the first know our latest offers and updates!</p>
                            </div>
                            <div className="contact-form d-flex">
                                <input className="inputs form-control rounded mt-5" placeholder="Enter your email address" etype="text"/>
                                <button className="btn btn-primary buttons mt-5">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;