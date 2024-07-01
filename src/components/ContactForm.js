require('dotenv').config()
import React, { useRef, useState, Fragment } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {

        e.preventDefault();
        setErrorMessage(false);
        setSuccessMessage(false);
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
                    setSuccessMessage(true)
                    toast( `Message sent successfully!
                        You will get a reply within one business day`, {
                        position: "top-right",
                        
                        });
                    console.log('SUCCESS!');

                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

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
                    {
                        successMessage ? (
                            <p className="text-success">Message sent successfully! <br />You will get a reply within one business day</p>
                        ) : (
                            ''
                        )
                    }

                    {
                        errorMessage ? (
                            <p className="error-message text-success">Failed to send message. Please try again later. </p>
                        ) : (
                            ''
                        )
                    }
                    <button type="submit" className={`template-btn`}>Send Message <i className="fas fa-arrow-right"></i></button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default ContactForm;
