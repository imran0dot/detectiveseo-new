import Link from "next/link";
import AccordionV1 from "../src/components/AccordionV1";
import Subscribe from "../src/components/Subscribe";
import Layouts from "../src/layouts/Layouts";

const Services = () => {
  return (
    <Layouts pageTitle="Our Services">
      {/* <!--====== Service Section Start ======--> */}
      <section className="service-section p-t-130 p-b-100">
        <div className="container">
          {/* <!-- Icon Box One --> */}
          <div className="row fancy-icon-boxes-v1">
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="fancy-icon-box m-b-30">
                <div className="box-icon">
                  <i className="flaticon-goal-1"></i>
                  
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Website Design & Development</a>
                    </Link>
                  </h4>
                  <p>
                    Our websites are built from the ground up for conversion, with a focus on driving appointment bookings through SEO-optimized design and seamless integration with scheduling tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="fancy-icon-box m-b-30">
                <div className="box-icon">
                  <i className="flaticon-talk-show-1"></i>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Local SEO & Google Ads</a>
                    </Link>
                  </h4>
                  <p>
                    We optimize your online presence through extensive keyword research, on-page SEO, Google Business Profile management, and targeted ad campaigns to ensure you show up in local searches.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="fancy-icon-box m-b-30">
                <div className="box-icon">
                  <i className="flaticon-layers-2"></i>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Social Media Marketing</a>
                    </Link>
                  </h4>
                  <p>
                    From strategy to execution, we'll build your brand's social media presence with engaging content, targeted advertising, review generation, and community management across platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="fancy-icon-box m-b-30">
                <div className="box-icon">
                  <i className="flaticon-diamond-1"></i>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Email Marketing</a>
                    </Link>
                  </h4>
                  <p>
                    Our automated email campaigns nurture leads, reactivate past patients, deliver targeted content, and drive more appointments through reminders and personalized follow-ups
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="fancy-icon-box m-b-30">
                <div className="box-icon">
                  <i className="flaticon-certificate-1"></i>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Reputation Management</a>
                    </Link>
                  </h4>
                  <p>
                    Proactively monitor and respond to online reviews while optimizing your listings and generating new positive reviews to build a stellar reputation that attracts patients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="fancy-icon-box m-b-30">
                <div className="box-icon">
                  <i className="flaticon-rss-1"></i>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Analytics & Reporting</a>
                    </Link>
                  </h4>
                  <p>
                    Gain full visibility into your marketing performance with comprehensive dashboards, revenue impact reporting, continuous optimization, and data-driven strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Service Section End ======--> */}

      {/* <!--====== Start FAQ section ======--> */}
      <section className="faq-section p-t-130 p-b-130 bg-soft-grey-color">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7 col-md-10">
              <div className="faq-content p-r-60 p-r-lg-30 p-r-md-0">
                <div className="common-heading tagline-boxed m-b-30">
                  <h2 className="title">Your Success, Our Commitment</h2>
                </div>
                <div className="mb-3">
                  <p>Let's say on average a new patient is worth $1,000 in revenue for your practice over the course of their treatment plan. <br />
                    <span className="mt-2">With our proven marketing strategies, we typically help physio clinics attract 25-50 new patients per month.</span>
                  </p>
                  <ol className="list-group list-group-number">
                    <li className="list-group-item">. At the low end, that's an extra $25,000 in new monthly revenue: <br />
                      <span className="ml-3">25 new patients x $1,000 each = $25,000</span></li>

                    <li className="list-group-item">. At the higher end, it's $50,000 in new monthly revenue: <br />
                      <span className="ml-3">50 new patients x $1,000 each = $50,000</span></li>
                  </ol>
                </div>
                
                <div className="mb-3">
                  <p>Our marketing fees for physio clinics typically range from $3,000 - $6,000 per month based on the scope of services.</p>
                  <ol className="list-group list-group-number">
                    <li className="list-group-item">. So in the first scenario, you're looking at an ROI of 733%: <br />
                      <span className="ml-3">($25,000 new revenue - $3,000 fee) / $3,000 fee = 7.33x ROI</span></li>

                    <li className="list-group-item">. In the second scenario, your ROI jumps to an incredible 1,567%: <br />
                      <span className="ml-3">($50,000 new revenue - $6,000 fee) / $6,000 fee = 15.67x ROI</span></li>
                  </ol>
                </div>

                <p>With numbers like these, our marketing services quickly pay for themselves many times over. We'll get your clinic ranked higher, bring in more new patients, and deliver a fantastic ROI.</p>
              </div>
            </div>
            <div className="col-lg-5 col-md-9">
              <div className="faq-image text-lg-right m-t-md-60">
                <img src="assets/img/faq/faq-image.png" alt="faq image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Faq With SEO score box ======--> */}

      {/* <!--====== Start Pricing Section ======--> */}
      <section className="pricing-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="common-heading tagline-boxed m-b-70 text-center">
                <span className="tagline">Our Pricing Plan</span>
                <h2 className="title">
                  Choose The Best Package For Your SEO Marketing
                </h2>
              </div>
            </div>
          </div>

          {/* <!-- Pricing Table --> */}
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="pricing-table pricing-secondary-1 m-t-30">
                <div className="plan-title-area">
                  <h5 className="plan-name">Single Team</h5>
                  <img
                    src="assets/img/pricing/plan-icon.png"
                    alt="Plan icon"
                    className="plan-icon"
                  />
                  <svg className="plan-shape">
                    <path
                      className="blob"
                      d="M675.762,6280.79c27.519-33.95,38.271-67.86,19.8-107.55-44.452-95.53-192.815-73.8-213.55-32.81-19.531,38.6,77.819,48.49,80.344,152.05C563.555,6341.55,636.194,6329.6,675.762,6280.79Z"
                      transform="translate(-479.406 -6105.56)"
                    />
                  </svg>
                </div>
                <div className="plan-cost">
                  <span className="currency">$</span>
                  <span className="price">299</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-feature">
                  <li>Audit Report</li>
                  <li>GMB Profile Setup</li>
                  <li>1 page Website</li>
                  <li>3 social media setup</li>
                  <li className="disabled-feature">Monthly Support  X</li>
                </ul>
                <a href="#" className="template-btn">
                  Select Plan <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="pricing-table m-t-30">
                <div className="plan-title-area">
                  <h5 className="plan-name">Professional</h5>
                  <img
                    src="assets/img/pricing/plan-icon.png"
                    alt="Plan icon"
                    className="plan-icon"
                  />
                  <svg className="plan-shape">
                    <path
                      className="blob"
                      d="M675.762,6280.79c27.519-33.95,38.271-67.86,19.8-107.55-44.452-95.53-192.815-73.8-213.55-32.81-19.531,38.6,77.819,48.49,80.344,152.05C563.555,6341.55,636.194,6329.6,675.762,6280.79Z"
                      transform="translate(-479.406 -6105.56)"
                    />
                  </svg>
                </div>
                <div className="plan-cost">
                  <span className="currency">$</span>
                  <span className="price">599</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-feature">
                  <li>GMB Profile setup</li>
                  <li>Complete Website $700</li>
                  <li>maintenance and support</li>
                  <li className="disabled-feature">Local SEO</li>
                  <li className="disabled-feature">Google & Facebook Ads</li>
                </ul>
                <a href="#" className="template-btn">
                  Select Plan <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="pricing-table pricing-secondary-1 m-t-30">
                <div className="plan-title-area">
                  <h5 className="plan-name">Pro - Premium</h5>
                  <img
                    src="assets/img/pricing/plan-icon.png"
                    alt="Plan icon"
                    className="plan-icon"
                  />
                  <svg className="plan-shape">
                    <path
                      className="blob"
                      d="M675.762,6280.79c27.519-33.95,38.271-67.86,19.8-107.55-44.452-95.53-192.815-73.8-213.55-32.81-19.531,38.6,77.819,48.49,80.344,152.05C563.555,6341.55,636.194,6329.6,675.762,6280.79Z"
                      transform="translate(-479.406 -6105.56)"
                    />
                  </svg>
                </div>
                <div className="plan-cost">
                  <span className="currency">$</span>
                  <span className="price">999</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-feature">
                  <li>All in Professional</li>
                  <li>Social media Branding</li>
                  <li>reputation management</li>
                  <li className="disabled-feature">2 Blog post in a week</li>
                  <li className="disabled-feature">24/7 Property support</li>
                </ul>
                <a href="#" className="template-btn">
                  Select Plan <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Pricing Section ======--> */}

      <Subscribe />
    </Layouts>
  );
};

export default Services;
