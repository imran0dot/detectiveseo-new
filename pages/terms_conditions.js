import React from 'react';
import Layouts from '../src/layouts/Layouts';
import Head from 'next/head';

const terms_conditions = () => {
    return (
        <Layouts pageTitle={"Terms & Condition"}>
            <Head>
                <title>DetectiveSEO | Terms & Condition</title>
            </Head>

            <section className='container py-5 terms-container'>
                <h1 className='text-center my-5 terms-title'>Terms & Conditions</h1>
                <h4>Introduction:</h4>
                <p>Welcome to <a href="https://detectiveseo.com/">Detective SEO</a>. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.</p>

                <h1 className='text-center my-5 terms-title'>Use of Website</h1>

                <h4>Eligibility</h4>
                <p>To use our website, you must be at least 18 years old and have the legal capacity to enter into binding contracts.</p>

                <h4>License</h4>
                <p>We grant you a limited, non-exclusive, non-transferable, and revocable license to use our website for personal and commercial purposes in accordance with these Terms and Conditions.</p>

                <h4>Prohibited Activities</h4>
                <p>You agree not to:</p>
                <ul>
                    <li>Use the website for any unlawful purpose.</li>
                    <li>Violate any applicable laws or regulations.</li>
                    <li>Distribute viruses or other harmful code.</li>
                    <li>Attempt to gain unauthorized access to our systems or networks.</li>
                </ul>

                <h1 className='text-center my-5 terms-title'>Services</h1>

                <h4>Service Description</h4>
                <p>Detective SEO provides digital marketing services including website design and development, SEO, social media management, and more, specifically tailored for healthcare and physiotherapy practices.</p>

                <h4>Service Agreements</h4>

                <p>Specific terms and conditions for our services will be outlined in individual service agreements. These agreements will take precedence over these general terms in case of any conflict</p>

                <h1 className='text-center my-5 terms-title'>Payment</h1>

                <h4>Fees</h4>
                <p>Fees for our services will be specified in the relevant service agreement. All payments must be made in accordance with the terms outlined in the agreement.</p>

                <h4>Refunds</h4>
                <p>Refund policies will be detailed in the specific service agreements. Generally, fees for services rendered are non-refundable.</p>


                <h4>Intellectual Property</h4>
                <p>All content on this website, including text, graphics, logos, and software, is the property of Detective SEO or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from our content without our explicit permission.</p>

                <h4>Privacy</h4>
                <p>Your use of our website is also governed by our Privacy Policy, which can be found <a href="https://detectiveseo.com/privacy-policy">here</a>.</p>

                <h4>Limitation of Liability</h4>
                <p>To the fullest extent permitted by law, Detective SEO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p>
                <ul>
                    <li>Your use or inability to use our website.</li>
                    <li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
                </ul>

                <h4>Indemnification</h4>
                <p>You agree to indemnify, defend, and hold harmless Detective SEO, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees and costs, made by any third party due to or arising out of your use of our website or services, your violation of these Terms and Conditions, or your violation of any law or the rights of a third party.
                </p>
                <h4>Changes to Terms and Conditions</h4>
                <p>We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website following the posting of revised Terms and Conditions means that you accept and agree to the changes.</p>

                <h4>Governing Law</h4>
                <p>These Terms and Conditions are governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in Dhaka-Bangladesh for the resolution of any disputes.</p>

                <h4>Contact Information</h4>
                <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                <p>Detective SEO <br />
                    Dhaka, Bangladesh <br />
                    himel@detectiveseo.net <br />
                    +8801841129353
                </p>
            </section>
        </Layouts>
    );
};

export default terms_conditions;