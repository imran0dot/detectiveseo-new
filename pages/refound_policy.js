import React from 'react';
import Layouts from '../src/layouts/Layouts';
import Head from 'next/head';

const refound_policy = () => {
    return <Layouts pageTitle="Refound Policy">
        <Head>
            <title>DetectiveSEO | Refound Policy</title>

        </Head>
        <section className="blog-area p-t-130 p-b-130">
            {/* Overview */}
            <div className="container refound">
                <h1 className='text-center my-5'>Refund Policy</h1>
                <h4>Overview</h4>
                <p>At DetectiveSEO, we are committed to providing the best digital marketing services to help your clinic thrive. We understand that sometimes things don’t go as planned, and we are here to help ensure your satisfaction with our services. This Refund Policy outlines the terms and conditions under which refunds may be issued for our services.</p>



                {/* Eligibility for Refunds */}
                <h4>Eligibility for Refunds</h4>
                <p>To be eligible for a refund, you must meet the following criteria:</p>
                <ul>
                    <li><span>Service Agreement:</span> You must have a valid and active service agreement with DetectiveSEO.
                    </li>
                    <li><span>Timely Request: </span> Refund requests must be made within 30 days of the service delivery date.</li>
                    <li><span>Completion of Initial Contract Period: </span> Refunds will not be issued if the initial contract period agreed upon has not been completed, unless otherwise specified in the service agreement.</li>
                    <li><span>Documented Issues: </span> You must provide detailed documentation of the issues encountered and evidence of the efforts made to resolve them through our support channels.</li>
                </ul>


                {/* Non-Refundable Services */}
                <h4>Non-Refundable Services</h4>
                <p>The following services are non-refundable:</p>
                <ul>
                    <li><span>Consultation Fees: </span> Fees charged for initial consultations and strategy sessions.
                    </li>
                    <li><span>Completed Services: </span> Services that have been fully delivered and accepted by the client.</li>
                </ul>


                {/* Process for Requesting a Refund */}
                <h4>Process for Requesting a Refund</h4>
                <p>To request a refund, please follow these steps:</p>
                <ul>
                    <li><span>Contact Support: </span> Reach out to our support team via email at <a href="support@detectiveseo.com">support@detectiveseo.com</a> or through our <a href="https://detectiveseo.com/contact/">contact form.</a>
                    </li>
                    <li><span>Provide Documentation: </span> Include all relevant details and documentation to support your refund request.</li>
                    <li><span>Review Period: </span> Our team will review your request and respond within 10 business days.</li>
                </ul>


                {/* Refund Approval */}
                <h4>Refund Approval</h4>
                <p>If your refund request is approved, we will initiate a refund to your original method of payment. The time it takes for the refund to appear on your account will depend on your card issuer’s policies.</p>

                {/* Changes to This Policy */}
                <h4>Changes to This Policy</h4>
                <p>DetectiveSEO reserves the right to update or modify this Refund Policy at any time. Any changes will be posted on this page and will take effect immediately upon posting.</p>

                <p className='pt-3 border-top'>For any questions or concerns regarding this policy, please contact us at</p>
                <a href="">support@detectiveseo.com.</a>

                <p className="border-top border-bottom py-3">
                © {new Date().getFullYear()} <a href="#">DetectiveSEO</a>. All Rights
                Reserved
              </p>

              <p>Feel free to customize this policy further to fit the specific needs and operations of your business.</p>
            </div>
        </section>
    </Layouts>;
};

export default refound_policy;