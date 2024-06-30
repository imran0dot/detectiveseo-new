import React from 'react';

const ContactFrom = () => {
    return (
        <div className="contact-form-v2">

            <form>
                <div className="input-field m-b-30">
                    <input type="text" id="fullName" placeholder="Full Name" name="name" required="" />
                    <label htmlFor="fullName">Name</label>
                </div>
                <div className="input-field m-b-30">
                    <input type="text" id="phoneNumber" placeholder="Phone Number" name="phone" required="" />
                    <label htmlFor="phoneNumber">Phone</label>
                </div>
                <div className="input-field m-b-30">
                    <input type="email" id="emailAddress" placeholder="Email Address" name="email" required="" />
                    <label htmlFor="emailAddress">Email</label>
                </div>
                <div className="input-field textarea-field m-b-30">
                    <textarea id="message" placeholder="Message" name="message"></textarea>
                </div>
                <div className="input-field">
                    <button type="submit" className="template-btn">Send Message <i className="fas fa-arrow-right"></i></button>
                </div>
            </form>

        </div>
    );
};

export default ContactFrom;