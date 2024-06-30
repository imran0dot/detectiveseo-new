require('dotenv').config()
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [successMessage , setSuccessMessage ] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();
        setSuccessMessage(false);
        // console.log(e.target);
        const MyForm = e.target;
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                MyForm,
                process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
            )
            .then(
                () => {
                    MyForm.reset();
                    setSuccessMessage(true);
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    console.log(successMessage);

    return (
        <div className="contact-form-v2">
            <form ref={form} onSubmit={sendEmail}>
                <div className="input-field m-b-30">
                    <input type="text" id="fullName" placeholder="Full Name" name="name" required />
                    <label htmlFor="fullName">Name</label>
                </div>
                <div className="input-field m-b-30">
                    <input type="text" id="phoneNumber" placeholder="Phone Number" name="phone" required />
                    <label htmlFor="phoneNumber">Phone</label>
                </div>
                <div className="input-field m-b-30">
                    <input type="email" id="emailAddress" placeholder="Email Address" name="email" required />
                    <label htmlFor="emailAddress">Email</label>
                </div>
                <div className="input-field textarea-field m-b-30">
                    <textarea id="message" placeholder="Message" name="message"></textarea>
                </div>
                <div className="input-field">
                    <button type="submit" className={`template-btn ${successMessage && 'bg-danger border border-danger'}`}>Send Message <i className="fas fa-arrow-right"></i></button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
