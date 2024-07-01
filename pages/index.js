import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layouts from "../src/layouts/Layouts";
import { testimonialActiveOne } from "../src/sliderProps";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { openAudit } from "../src/features/auditSlice";

const Index = () => {
  const dispatch = useDispatch();
  return (
    <Layouts>

      <Head>
        <title>DetectiveSEO | Home</title>

      </Head>

      <section className="hero-area-v1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-11">
              <div className="hero-content">
                <span className="title-tag wow fadeInUp" data-wow-delay="0.2s">
                  <span>Save 25%</span> Faster solutions
                </span>
                <h1 className="hero-title wow fadeInUp" data-wow-delay="0.3s">
                  Reach More <span className="">Local Patients</span> With Powerful Medical Marketing
                </h1>
                <ul className="hero-btns d-flex justify-content-center">
                  <li className="wow fadeInUp" data-wow-delay="0.4s">
                      <button onClick={() => dispatch(openAudit())} className="template-btn">
                        Get Free Audit	 <i className="fas fa-arrow-right"></i>
                      </button>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.4s">
                    <Link href="https://wa.me/8801841129353">
                      <a className="template-btn bordered-btn">
                        Live Chat <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hero-particle-effect d-none d-md-block">
            <img
              className="particle-1 animate-zoom-fade"
              src="assets/img/particle/particle-1.png"
              alt="particle One"
            />
            <img
              className="particle-2 animate-float-bob-y"
              src="assets/img/particle/particle-2.png"
              alt="particle Two"
            />
            <img
              className="particle-3 animate-zoominout"
              src="assets/img/particle/particle-3.png"
              alt="particle Three"
            />
            <img
              className="particle-4 animate-zoominout"
              src="assets/img/particle/particle-4.png"
              alt="particle Four"
            />
            <img
              className="particle-5 animate-zoominout"
              src="assets/img/particle/particle-5.png"
              alt="particle Five"
            />
          </div>
        </div>
      </section>
      {/* <!--====== End Hero Area Updated ======--> */}


      {/* <!--====== Start Contact OWNERS Area ======--> */}
      {/* <section className="data-analysis-section p-b-125">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10">
              <div className="analysis-text-block p-l-50 p-l-md-0">
                <h2>
                  Stop Overpaying For Your Clinic Website & Marketing
                </h2>
                <p>Thousands of Clinic Owners rely on our powerful websites and marketing services to:</p>

                <ul className="check-list m-t-30">
                  <li>Acquire more profitable patients</li>
                  <li>Improve your online reputation</li>
                  <li>Increase patient retention & reduce no-shows</li>
                </ul>

              </div>
            </div>

            <div className="col-lg-5 col-md-8">
              <ContactFrom />
            </div>
          </div>
        </div>
      </section> */}
      {/* <!--====== End Contact OWNERS Area ======--> */}



      {/* <!--====== Start CLINIC OWNERS Area ======--> */}
      <section className="data-analysis-section p-b-125">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7 col-md-10 d-sm-block d-none">
              {/* <!-- Preview Gallery One --> */}
              <div className="preview-galley-v1 m-b-md-70">
                <img
                  className="preview-image-1 wow fadeInUp"
                  src="assets/img/preview-gallery/manage-data-1.jpg"
                  alt="data analysis One"
                />
                <img
                  className="preview-image-2 animate-float-bob-x wow fadeInUp"
                  data-wow-delay="0.2s"
                  src="assets/img/preview-gallery/manage-data-2.jpg"
                  alt="data analysis Two"
                />
                <img
                  className="preview-image-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                  src="assets/img/preview-gallery/manage-data-3.jpg"
                  alt="data analysis Three"
                />
                <img
                  className="preview-image-4 wow fadeInUp"
                  data-wow-delay="0.4s"
                  src="assets/img/preview-gallery/manage-data-4.jpg"
                  alt="data analysis Four"
                />
                <img
                  className="preview-image-5 animate-float-bob-y"
                  data-wow-delay="0.5s"
                  src="assets/img/preview-gallery/manage-data-5.jpg"
                  alt="data analysis Five"
                />
                <img
                  className="preview-image-6 wow fadeInUp"
                  data-wow-delay="0.6s"
                  src="assets/img/preview-gallery/manage-data-6.jpg"
                  alt="data analysis Six"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-8">
              <div className="analysis-text-block p-l-50 p-l-md-0">
                <div className="common-heading tagline-boxed m-b-30">
                  <span className="tagline">CLINIC OWNERS</span>
                  {/* <h2 className="title">Manage your data analysis easily</h2> */}
                </div>
                <h2>
                  Are You Facing Any Of These Challenges?
                </h2>
                <ul className="check-list m-t-30">
                  <li>Bigger healthcare companies taking your patients</li>
                  <li>Previous marketing efforts that didn't work out well</li>
                  <li>Your clinic not showing up on Google searches</li>
                  <li>Rising costs making it hard to make ends meet</li>
                  <li>Your services not getting paid properly</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End CLINIC OWNERS Area ======--> */}


      {/* <!--====== Start Feature Area ======--> */}
      <section className="core-feature m-b-90">
        <div className="container">
          <div className="row no-gutters justify-content-center">
            <div className="col-lg-5 col-md-10 col-sm-9">
              <div className="core-feature-text p-r-40 p-r-lg-30 m-b-md-80">
                <div className="common-heading tagline-boxed m-b-30">
                  <span className="tagline">Core Features</span>
                  <h2 className="title">How can we help your problems</h2>
                </div>
                <p>
                  We understand. External challenges can make running a successful small clinic incredibly difficult. Financial issues, hiring complications, and a shortage of new patients all contribute to significant stress for you and your team.
                  <br />
                  <br />
                  You need effective marketing strategies to grow your clinic business, even in today's challenging healthcare environment. From website design and social media management to GMB optimization and improving your Google ranking, we can help you attract more patients and enhance your digital presence.
                </p>

              </div>
            </div>
            <div className="col-lg-7">
              {/* <!-- Feature Box One --> */}
              <div className="row justify-content-center image-boxes-v1 p-l-40 p-l-lg-0">
                <div
                  className="col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="image-box active m-b-sm-30">
                    <div className="thumb">
                      <img src="assets/img/feature/01.png" alt="Image" />
                    </div>
                    <h4 className="title">Web-Site Design & Development</h4>
                    <Link href="/services">
                      <a className="box-link">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="image-box">
                    <div className="thumb">
                      <img src="assets/img/feature/02.png" alt="Image" />
                    </div>
                    <h4 className="title">SEO & Organic Marketing</h4>
                    <Link href="/services">
                      <a className="box-link">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Start Feature End ======--> */}



      {/* <!--====== Service Section Start ======--> */}
      <section className="service-section bg-heading-color p-t-125 p-b-125">
        <div className="container">
          {/* <!-- Common Heading --> */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="common-heading tagline-boxed heading-white m-b-50 text-center">
                <h2 className="title">Our Strategy Approach</h2>
                <p className="mt-4 text-{#fff}">
                  We provide to notch digital services with professional hands. We not only think about present security but also it’s future. Future security is our first priority.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Icon Box One --> */}
          <div className="row justify-content-center fancy-icon-boxes-v1 boxes-white-version">
            <div
              className="col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="fancy-icon-box m-t-30">
                <div className="box-icon">
                  <img
                    src="assets/img/fancy-icon-box/01.png"
                    alt="service icon one"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Market Analysis</a>
                    </Link>
                  </h4>
                  <p>
                    We deeply study your local area, customers, and competitors to ensure strategies fit your real situation.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fancy-icon-box m-t-30">
                <div className="box-icon">
                  <img
                    src="assets/img/fancy-icon-box/02.png"
                    alt="service icon one"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Information Gathering</a>
                    </Link>
                  </h4>
                  <p>
                    We gather input from your existing patients through surveys, groups, and data to identify improvement areas.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="fancy-icon-box m-t-30">
                <div className="box-icon">
                  <img
                    src="assets/img/fancy-icon-box/03.png"
                    alt="service icon one"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Financial Plan</a>
                    </Link>
                  </h4>
                  <p>
                    We forecast revenues, costs, and cash flow scenarios to maximize profits and guide smart investments.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-icon-box m-t-30">
                <div className="box-icon">
                  <img
                    src="assets/img/fancy-icon-box/04.png"
                    alt="service icon one"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Growth Strategy</a>
                    </Link>
                  </h4>
                  <p>
                    Our healthcare expertise allows us to recommend proven ways to attract more new patients.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="fancy-icon-box m-t-30">
                <div className="box-icon">
                  <img
                    src="assets/img/fancy-icon-box/05.png"
                    alt="service icon one"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Risks and Mitigation</a>
                    </Link>
                  </h4>
                  <p>
                    We carefully assess potential risks and make plans to protect your practice from issues.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="fancy-icon-box m-t-30">
                <div className="box-icon">
                  <img
                    src="assets/img/fancy-icon-box/06.png"
                    alt="service icon one"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Unique Value Proposition</a>
                    </Link>
                  </h4>
                  <p>
                    We work with you to highlight and promote what makes your practice truly unique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Service Section End ======--> */}

      {/* <!--====== Statices Section Start ======--> */}
      <section className="statices-section p-t-125  border-bottom-primary">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between justify-content-center ">
            <div className="col-lg-7 col-md-10">
              <div className="statices-text-block m-b-md-60">
                <div className="common-heading tagline-boxed m-b-30">
                  <span className="tagline">Don't Leave empty handed</span>
                  <h1 className="fw-bold ">Get The 50+ Marketing Checklist For Your Clinic Business</h1>
                </div>
                <p className="mb-5">
                  It's a packed with tips and strategies you can use to grow your clinic today
                </p>

                <div className="cta-btn">
                  <a href="#" className="py-2 px-5 rounded rounded-4 bg-primary text-white fw-bold fs-1">
                    Get the Check List <i className="far fa-arrow-right ml-2"></i>
                  </a>
                  <a href="https://wa.me/8801841129353" className="text-dark border border-primary py-2 px-5 rounded rounded-4">
                    Live Chat <i className="far fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>


            </div>
            <div className="col-lg-5 col-md-11">
              <img
                src="assets/img/preview-gallery/Checklist.png"
                className="animate-float-bob-y"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Statices Section End ======--> */}

      {/* <!--====== Start Testimonials ======--> */}
      <section className="testimonials-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6">
              <div className="common-heading tagline-boxed text-center m-b-60">
                <span className="tagline">Our Testimonials</span>
                <h2 className="title">What our clients say about solutions</h2>
              </div>
            </div>
          </div>
          <Slider
            {...testimonialActiveOne}
            className="row testimonial-slider-v1 testimonial-slider-extra-gap"
            id="testimonialActiveOne"
          >
            <div className="col">
              <div className="testimonial-item">
                <div className="quote-icon">
                  <i className="flaticon-right-quote"></i>
                </div>
                <p>
                  Their healthcare marketing expertise is second to none. Our website looks amazing and our Google visibility has skyrocketed thanks to their SEO work. We've doubled the number of new patients coming through the door each month!
                </p>
                <div className="author-info">
                  <img
                    src="assets/img/testimonial/author-1.png"
                    alt="testimonial author"
                  />
                  <h6 className="name">Michael W. Kirwan</h6>
                  <span className="title">Pinnacle Physical Therapy</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="quote-icon">
                  <i className="flaticon-right-quote"></i>
                </div>
                <p>
                  As a solo practitioner, I was struggling to get my name out there. Their social media and reputation management services helped me build a strong online presence. Now I have a steady stream of 5-star reviews and new patients finding me easily.
                </p>
                <div className="author-info">
                  <img
                    src="assets/img/testimonial/author-2.png"
                    alt="testimonial author"
                  />
                  <h6 className="name">Dr. Jessica Nguyen </h6>
                  <span className="title">Richardson Sports Rehab</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="quote-icon">
                  <i className="flaticon-right-quote"></i>
                </div>
                <p>
                  We partnered with them to accelerate our referrals from local physicians. Their referral marketing strategies opened so many new doors - we've added two new providers just to keep up with increased demand!
                </p>
                <div className="author-info">
                  <img
                    src="assets/img/testimonial/author-3.png"
                    alt="testimonial author"
                  />
                  <h6 className="name">Harold S. Richardson</h6>
                  <span className="title">Advanced Kinetics PT</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="quote-icon">
                  <i className="flaticon-right-quote"></i>
                </div>
                <p>
                  Their patient retention and email marketing programs are game-changers. We've dramatically reduced our churn rate and re-activated so many lapsed patients. It's like getting an entirely new stream of revenue!
                </p>
                <div className="author-info">
                  <img
                    src="assets/img/testimonial/author-small-6.png"
                    alt="testimonial author"
                  />
                  <h6 className="name">Michael W. Kirwan</h6>
                  <span className="title">Mobility Plus Therapy Services</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="quote-icon">
                  <i className="flaticon-right-quote"></i>
                </div>
                <p>
                  After failed marketing attempts, I was skeptical but their data-driven approach won me over. They took the time to understand our goals and delivered measurable results. I'm blown away by our ROI working with their team.
                </p>
                <div className="author-info">
                  <img
                    src="assets/img/testimonial/author-small-6.png"
                    alt="testimonial author"
                  />
                  <h6 className="name">Michael W. Kirwan</h6>
                  <span className="title">Davis Physical Therapy & Wellness</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* <!--====== End Testimonials ======--> */}

      {/* <!--====== Start Counter Section ======--> */}
      <section className="counter-section section-with-map-bg bg-primary-color p-t-80 p-b-80 p-t-md-160">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9">
              {/* <!-- Preview Gallery Two --> */}
              <div className="preview-galley-v3 m-b-md-100">
                <img
                  className="preview-image-1"
                  src="assets/img/preview-gallery/count-down.png"
                  alt="Preview Image"
                />
                <img
                  className="preview-image-2 animate-float-bob-y"
                  src="assets/img/preview-gallery/count-down-top.png"
                  alt="Preview Image"
                />
                <img
                  className="preview-image-3 animate-float-bob-y"
                  src="assets/img/preview-gallery/count-down-bottom.png"
                  alt="Preview Image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              {/* <!-- Counter Item --> */}
              <div className="row counter-items-v1 p-xl-5">
                <div className="col-6">
                  <div className="counter-item m-b-60 d-flex flex-column align-items-center justify-content-center">
                    <div className="icon">
                      <i className="fal fa-users"></i>
                    </div>
                    <div className="counter-wrap">
                      <Counter end="99" />
                      <span className="suffix">+</span>
                    </div>
                    <p className="title">Happy Client</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="counter-item m-b-60 d-flex flex-column align-items-center justify-content-center">
                    <div className="icon">
                      <i className="fal fa-file-alt"></i>
                    </div>
                    <div className="counter-wrap">
                      <Counter end="5" />
                      <span className="suffix">M</span>
                    </div>
                    <p className="title">Total Revenue</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="counter-item d-flex flex-column align-items-center justify-content-center">
                    <div className="icon">
                      <i className="fal fa-cloud-download"></i>
                    </div>
                    <div className="counter-wrap">
                      <Counter end="7" />
                      <span className="suffix">+</span>
                    </div>
                    <p className="title">Team Member</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="counter-item d-flex flex-column align-items-center justify-content-center">
                    <div className="icon">
                      <i className="fal fa-gem"></i>
                    </div>
                    <div className="counter-wrap">
                      <Counter end="10" />
                      <span className="suffix">+</span>
                    </div>
                    <p className="title">Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Counter Section ======--> */}

      {/* <!--====== Start CTA Section ======--> */}
      <section className="cta-section cta-with-particle border-bottom-primary p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cta-content wow fadeInUp">
                <div className="common-heading tagline-boxed m-b-50 text-center">
                  <span className="tagline">Your Dedicated Health Care Marketing Team</span>
                  <h2 className="title">
                    Leverage the power of digital marketing to grow your physiotherapy practice, attract new clients, and meet your goals.
                  </h2>
                </div>

                <div className="cta-btn">
                  <a href="#" className="py-2 px-5 rounded rounded-4 bg-primary text-white fw-bold fs-1">
                    Get the Check List <i className="far fa-arrow-right ml-2"></i>
                  </a>
                  <a href="https://wa.me/8801841129353" className="text-dark border border-primary py-2 px-5 rounded rounded-4">
                    Live Chat <i className="far fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cta-particle d-none d-md-block">
            <img
              className="particle-left"
              src="assets/img/particle/cta-left-particle-1.png"
              alt="cta particle 1"
            />
            <img
              className="particle-right"
              src="assets/img/particle/cta-right-particle-1.png"
              alt="cta particle 2"
            />
          </div>
        </div>
      </section>
      {/* <!--====== End CTA Section ======--> */}
    </Layouts>
  );
};

export default Index;
