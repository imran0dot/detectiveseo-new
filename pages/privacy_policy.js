import React from 'react';
import Layouts from '../src/layouts/Layouts';
import Head from 'next/head';

const privacy_policy = () => {
    return <Layouts pageTitle="Privacy Policy">
    <Head>
        <title>DetectiveSEO | Privacy Policy</title>

    </Head>
    <section className="blog-area p-t-130 p-b-130 privacy">
            {/* Introduction */}
            <div className="container">
                <h1 className='text-center my-5'>Privacy Policy</h1>
                <h4>Introduction:</h4>
                <p>Detective SEO we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://detectiveseo.com/">https://detectiveseo.com</a> or use our services. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.</p>
            </div>

            {/* Information We Collect */}

            <div className="container">
                <h1 className='text-center my-5'>Information We Collect</h1>

                <h4>Personal Data</h4>
                <p>We may collect the following types of personal data from you:</p>
                <ul>
                    <li><span>Contact Information:</span> Name, email address, phone number, and website address.</li>
                    <li><span>Account Information:</span> Username, password, and other registration details.</li>
                    <li><span>Payment Information:</span> Credit card details and billing address.</li>
                    <li><span>Communications:</span> Records of your correspondence with us.</li>
                </ul>
                
                <h4>Usage Data</h4>
                <p>We may also collect information on how our website is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
                </p>

                
                <h4>Tracking & Cookies Data</h4>
                <p>We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>

                <h4>How We Use Your Information</h4>
                <p>We use the information we collect in the following ways:</p>
                <ul>
                    <li><span>To Provide and Maintain Our Services:</span>  Including to monitor the usage of our website.</li>
                    <li><span>To Manage Your Account:</span> To manage your registration as a user of our website.</li>
                    <li><span>To Contact You:</span>  To contact you by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                    <li><span>To Provide Customer Support:</span> To address your inquiries and provide assistance.</li>
                    <li><span>To Improve Our Website:</span> To understand and analyze how you use our website and develop new features and services.</li>
                    <li><span>To Process Payments:</span> To manage payments, fees, and charges.</li>
                </ul>


                <h4>Sharing Your Information</h4>
                <p>We may share your personal information with third parties in the following situations:</p>
                <ul>
                    <li><span>With Service Providers:</span>  We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.</li>

                    <li><span>For Business Transfers:</span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>

                    <li><span>With Affiliates:</span>  We may share your information with our affiliates, in which case we will require them to honor this Privacy Policy.</li>

                    <li><span>With Your Consent:</span> We may disclose your personal information for any other purpose with your consent.</li>
                    
                </ul>

                <h4>Data Security</h4>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have implemented measures to secure your personal information, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other types of misuse.</p>

                <h4>Your Data Protection Rights</h4>
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul>
                    <li><span>The Right to Access:</span> You have the right to request copies of your personal data.
                    </li>
                    <li><span>The Right to Rectification:</span> You have the right to request that we correct any information you believe is inaccurate or complete information you believe</li>
                </ul>
                
            </div>
        </section>
</Layouts>
};

export default privacy_policy;