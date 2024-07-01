require('dotenv').config()
import React, { useRef, useState, Fragment } from 'react';
import emailjs from '@emailjs/browser';
import discount from '../../public/assets/img/free.png'
import close from '../../public/assets/img/close.png'
import { ToastContainer, toast } from 'react-toastify';
import successGif from '../../public/assets/img/smile.gif'
import errorGif from '../../public/assets/img/error.gif'
const AuditModal = ({ handleClose }) => {

    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const form = useRef();
    
    const sendEmail = (e) => {

        e.preventDefault();
        const MyForm = e.target;
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID_AUDIT,
                MyForm,
                process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
            )
            .then(
                () => {
                    setSuccessMessage(true);
                    MyForm.reset();
                    setTimeout(() => {
                        handleClose()
                    }, 7000)

                },
                (error) => {
                    setErrorMessage(true);
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className='modal'>
            <div className={`${successMessage ? 'close-modal' : 'modal-content'}`}>
                <h1>lets Discuss Your <span className='text-uppercase text-primary-emphasis'>project</span></h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input className='mb-3' type="text" name="name" placeholder='Name*' id="name" required />
                    <input className='mb-3' type="email" name="email" placeholder='Email*' id="email" required />
                    <input className='mb-3' type="text" name="website" placeholder='Website URL*' id="website" required />
                    <button className='template-btn'>Get Free Audit</button>
                </form>
                <button className='modal-close-btn' onClick={handleClose}><img src={close?.src} width={30} alt="close" /></button>
                <p className='limited-title'>Limited Time Offer</p>
                <img className='discount' src={discount?.src} alt="Free Discount" />
            </div>

            {/* Success Modal */}
            {
                successMessage && (
                    <div className='success-modal'>
                        <img src={successGif?.src} alt="Success" width={150} />
                        <h4>Congratulations..!</h4>
                        <p>Your message has been sent successfully</p>
                        <button className='message-close-btn' onClick={handleClose}><img src={close?.src} width={20} alt="close" /></button>
                    </div>
                )
            }

            {/* Error Modal */}
            {
                errorMessage && (
                    <div className='error-modal'>
                        <img src={errorGif?.src} alt="Error" width={150} />
                        <h4>Something went wrong..!</h4>
                        <p>Please try again</p>
                        <button className='message-close-btn' onClick={handleClose}><img src={close?.src} width={20} alt="close" /></button>
                    </div>
                )
            }
            <ToastContainer />
        </div>
    );
};

export default AuditModal;