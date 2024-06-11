import AccordionV1 from "../src/components/AccordionV1";
import Counter from "../src/components/Counter";
import Subscribe from "../src/components/Subscribe";
import Layouts from "../src/layouts/Layouts";

const Team = () => {
  return (
    <Layouts pageTitle="Pricing Plan">
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
                  <span className="price">29.24</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-feature">
                  <li>Social Media Marketing</li>
                  <li>2.100 Keywords</li>
                  <li>One Way Link Building</li>
                  <li className="disabled-feature">5 Free Optimization</li>
                  <li className="disabled-feature">3 Press Releases</li>
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
                  <span className="price">57.68</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-feature">
                  <li>Social Media Marketing</li>
                  <li>2.100 Keywords</li>
                  <li>One Way Link Building</li>
                  <li className="disabled-feature">5 Free Optimization</li>
                  <li className="disabled-feature">3 Press Releases</li>
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
                  <span className="price">99.25</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-feature">
                  <li>Social Media Marketing</li>
                  <li>2.100 Keywords</li>
                  <li>One Way Link Building</li>
                  <li className="disabled-feature">5 Free Optimization</li>
                  <li className="disabled-feature">3 Press Releases</li>
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

      {/* <!--====== Start Counter Section ======--> */}
      <section className="counter-section counter-section-bordered">
        <div className="container-fluid container-1420">
          <div className="counter-section-inner">
            <div className="row counter-items-v2">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item white-color counter-left">
                  <div className="counter-wrap">
                    <Counter end={35} />
                    <span className="suffix">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                  <p className="title">Our Trusted Active Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item white-color counter-left">
                  <div className="counter-wrap">
                    <Counter end={75} />
                    <span className="suffix">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                  <p className="title">SEO Project Complate</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item white-color counter-left">
                  <div className="counter-wrap">
                    <Counter end={94} />
                    <span className="suffix">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                  <p className="title">Experience Member</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-item white-color counter-left">
                  <div className="counter-wrap">
                    <Counter end={28} />
                    <span className="suffix">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                  <p className="title">Years Services Provide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Counter Section ======--> */}

      {/* <!--====== Start FAQ section ======--> */}
      <section className="faq-section p-t-130 p-b-130">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="faq-content p-r-60 p-r-lg-30 p-r-md-0">
                <div className="common-heading tagline-boxed m-b-30">
                  <span className="tagline">Asked Question</span>
                  <h2 className="title">
                    Frequently Asked <br /> Questions
                  </h2>
                </div>
                <div className="landio-accordion-v1 accordion-bordered">
                  <AccordionV1 />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="faq-image text-lg-right m-t-md-60">
                <img src="assets/img/faq/faq-image-2.png" alt="faq image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </Layouts>
  );
};

export default Team;
