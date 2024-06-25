import Head from "next/head";
import Layouts from "../src/layouts/Layouts";
import Link from "next/link";

const Contact = () => {
    return <Layouts pageTitle="Contact">
        <Head>
            <title>DetectiveSEO | Contact Us</title>
            
        </Head>
        <section className="blog-area p-t-130 p-b-130">
            <div className="container">
                <div className="row justify-content-lg-start justify-content-center">
                    <div className="col-xl-4 col-lg-5 col-md-7 col-sm-10">
                        <div className="contact-info-boxes-v2">
                            <div className="contact-info-box m-b-30 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="icon icon-gradient-1">
                                    <i className="fal fa-map-marker-alt"></i>
                                </div>
                                <div className="info-body">
                                    <h5 className="title">DetectiveSEO Location</h5>
                                    <a href="https://www.google.com/maps/place/Local+and+Small+Business+SEO+%7C+Detective+SEO/@24.3333641,90.0262768,17z/data=!3m1!4b1!4m6!3m5!1s0x37560330a8f99541:0xbca4f66b12138aa1!8m2!3d24.3333641!4d90.0288517!16s%2Fg%2F11rcq419yg?entry=ttu">1973 Tangail, Dhaka <br />  Bangladesh </a>

                                </div>
                            </div>
                            <div className="contact-info-box m-b-30 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon icon-gradient-2">
                                    <i className="fal fa-envelope-open-text"></i>
                                </div>
                                <div className="info-body">
                                    <h5 className="title">Email Address</h5>
                                    <p><a href="mailto:supportinfobiz@gmail.com">himel@detectiveseo.net</a></p>
                                </div>
                            </div>
                            <div className="contact-info-box wow fadeInUp" data-wow-delay="0.5s">
                                <div className="icon icon-gradient-3">
                                    <i className="fal fa-phone"></i>
                                </div>
                                <div className="info-body">
                                    <h5 className="title">Live Chat (What's App)</h5>
                                    <p><a href="https://wa.me/8801841129353">+8801841129353</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1 col-md-10">
                        <div className="contact-form-area m-t-md-100">
                            <div className="common-heading tagline-boxed m-b-40">
                                <span className="tagline">Send Us Message</span>
                                <h2 className="title">Have Any Questions ? <br /> Let’s Start to Talk</h2>
                            </div>
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
                                    <div className="input-field m-b-30">
                                        <input type="text" id="subject" placeholder="I Would Like To Discuses " name="subject" required="" />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                    <div className="input-field textarea-field m-b-30">
                                        <textarea id="message" placeholder="Message" name="message"></textarea>
                                    </div>
                                    <div className="input-field">
                                        <button type="submit" className="template-btn">Send Message <i className="fas fa-arrow-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-map-section">
            <div className="contact-map">
                {/* <iframe src="https://maps.google.com/maps?q=new%20york&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe> */}

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.3767930410313!2d90.02627677535409!3d24.33336407827708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37560330a8f99541%3A0xbca4f66b12138aa1!2sLocal%20and%20Small%20Business%20SEO%20%7C%20Detective%20SEO!5e0!3m2!1sen!2sbd!4v1717653766551!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>

    </Layouts>;
};

export default Contact;
