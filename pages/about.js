import Head from "next/head";
import Counter from "../src/components/Counter";
import Layouts from "../src/layouts/Layouts";
import aboutThumb1 from '../public/assets/img/preview-gallery/about-thumbnail-1.jpg'
import aboutThumb2 from '../public/assets/img/preview-gallery/about-thumbnail-2.jpg'
import aboutThumb3 from '../public/assets/img/preview-gallery/about-thumbnail-3.jpg'
import aboutThumb4 from '../public/assets/img/preview-gallery/about-thumbnail-4.jpg'
import leftParticle from '../public/assets/img/particle/cta-left-particle-1.png'
import rightParticle from '../public/assets/img/particle/cta-right-particle-1.png'
import missionImg from '../public/assets/img/mission.jpg'
import Our_Vision from '../public/assets/img/our_vision.jpg'
import missionIcon from '../public/assets/img/mission.png'
import visionIcon from '../public/assets/img/vision.png'
const About = () => {
  return (
    <Layouts pageTitle="About Company">
      <Head>
        <title>DetectiveSEO | About Us</title>
      </Head>
      <section className="about-us-area p-t-30 p-b-100 border-bottom-primary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-6 col-md-10">
              <div className="preview-image-showcase p-r-70 p-r-lg-40 p-r-md-0 p-b-md-40">
                <div className="images-left">
                  <div className="image-hover-zoom-overly">
                    <img
                      src={aboutThumb1?.src}
                      alt="About thumbnail one"
                    />
                  </div>
                  <img
                    src={aboutThumb3?.src}
                    alt="About thumbnail three"
                  />
                </div>
                <div className="images-right">
                  <img
                    src={aboutThumb2?.src}
                    alt="About thumbnail two"
                  />
                  <img
                    src={aboutThumb4?.src}
                    alt="About thumbnail four"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-9">
              <div className="about-us-content">
                <div className="common-heading tagline-boxed">
                  <span className="tagline">About US</span>
                </div>
                <p>
                  Welcome to Detective SEO, your premier partner in website design and local SEO services tailored specifically for the healthcare industry. We understand the unique challenges and opportunities within the healthcare sector, and our mission is to help your practice stand out in an increasingly digital world.
                  <br />
                  <span style={{ margin: "10px 0px" }}>With our expert team of designers and SEO specialists, we create visually appealing, user-friendly websites that not only attract but also retain patients. </span>
                  <br />
                  Our local SEO strategies are meticulously crafted to improve your online visibility, ensuring that potential patients in your community can easily find and trust your services. At Detective SEO, we are dedicated to boosting your online presence and driving measurable growth for your healthcare practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Area End ===== --> */}



      {/* <!-- ===== Service Section Start ===== --> */}
      {/* <section className="service-area p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="common-heading tagline-boxed text-center m-b-30">
                <span className="tagline">Popular Services</span>
                <h2 className="title">
                  Made Amazing Mobile Application With Our Solutions
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center iconic-boxes-v1">
            <div className="col-xl-3 col-md-6 col-sm-10">
              <div className="iconic-box m-t-30">
                <div className="icon icon-gradient-3">
                  <i className="far fa-user-chart"></i>
                </div>
                <h4 className="title">Team Management</h4>
                <p>
                  Sed ut perspiciatis unde este error voluptate accus antium
                  doloremque
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-10">
              <div className="iconic-box m-t-30">
                <div className="icon icon-gradient-4">
                  <i className="far fa-compass"></i>
                </div>
                <h4 className="title">Time Tracking</h4>
                <p>
                  But I must explain to you how all this mistaken idea
                  denouncing pleasure
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-10">
              <div className="iconic-box m-t-30">
                <div className="icon icon-gradient-5">
                  <i className="far fa-squirrel"></i>
                </div>
                <h4 className="title">Payment System</h4>
                <p>
                  Quis autem vel eum iure reprehe deritea voluptate velit esse
                  quam bland
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-10">
              <div className="iconic-box m-t-30">
                <div className="icon icon-gradient-6">
                  <i className="far fa-fingerprint"></i>
                </div>
                <h4 className="title">High Security</h4>
                <p>
                  At vero eoset accusame et iusto odio dignissimosy ducimus qui
                  bland
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- ===== Service Section End ===== --> */}




      {/* <!--====== Start Team Loop ======--> */}
      {/* <section className="team-member-area section-half-dots-pattern-fixed p-t-30 p-b-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6">
              <div className="common-heading tagline-boxed text-center m-b-60">
                <span className="tagline">Creative Team</span>
                <h2 className="title">We Have Professional Creative Team </h2>
              </div>
            </div>
          </div>

          <div className="row team-members">
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="member-box m-b-30">
                <div className="member-photo">
                  <img src="assets/img/team/member-1.jpg" alt="Member Photo" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <a href="#">Donald L. Juarez</a>
                  </h5>
                  <p className="title">CEO &amp; Founder</p>
                  <ul className="social-links">
                    <li className="facebook">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="behance">
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="member-box m-b-30">
                <div className="member-photo">
                  <img src="assets/img/team/member-2.jpg" alt="Member Photo" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <a href="#">Head of Ideas</a>
                  </h5>
                  <p className="title">CEO &amp; Founder</p>
                  <ul className="social-links">
                    <li className="facebook">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="behance">
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="member-box m-b-30">
                <div className="member-photo">
                  <img src="assets/img/team/member-3.jpg" alt="Member Photo" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <a href="#">Evan A. Ethridge</a>
                  </h5>
                  <p className="title">Creative Head</p>
                  <ul className="social-links">
                    <li className="facebook">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="behance">
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="member-box m-b-30">
                <div className="member-photo">
                  <img src="assets/img/team/member-4.jpg" alt="Member Photo" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <a href="#">Donald T. Lewis</a>
                  </h5>
                  <p className="title">JS Developer</p>
                  <ul className="social-links">
                    <li className="facebook">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="behance">
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="member-box m-b-30">
                <div className="member-photo">
                  <img src="assets/img/team/member-5.jpg" alt="Member Photo" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <a href="#">Donald L. Juarez</a>
                  </h5>
                  <p className="title">Marketer</p>
                  <ul className="social-links">
                    <li className="facebook">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="behance">
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="member-box m-b-30">
                <div className="member-photo">
                  <img src="assets/img/team/member-6.jpg" alt="Member Photo" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <a href="#">Joseph Anderson</a>
                  </h5>
                  <p className="title">UI Designer</p>
                  <ul className="social-links">
                    <li className="facebook">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="behance">
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="member-box m-b-30">
                <div className="member-photo">
                  <img src="assets/img/team/member-7.jpg" alt="Member Photo" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <a href="#">Allan J. Sumlin</a>
                  </h5>
                  <p className="title">Shopify Expert</p>
                  <ul className="social-links">
                    <li className="facebook">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="behance">
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="member-box m-b-30">
                <div className="member-photo">
                  <img src="assets/img/team/member-8.jpg" alt="Member Photo" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <a href="#">Brian D. Rogers</a>
                  </h5>
                  <p className="title">Creative Designer</p>
                  <ul className="social-links">
                    <li className="facebook">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="behance">
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!--====== End Team Loop ======--> */}




      {/* <!--====== Start Mission Section ======--> */}
      <section className="p-b-30 my-5">
        <div className="container">
          {/* Our Mission */}
          <div className="mission-container">

            <div>
              <div className="mission-title">
                <div className="icon">
                  <img src={missionIcon?.src} alt="Mission" width={40} />
                </div>
                <h1>Our <span>Mission</span></h1>
              </div>
              <p>At DetectiveSEO, our mission is to empower healthcare and physiotherapy practices with innovative and effective digital marketing strategies. We understand the unique challenges faced by small clinics and solo practitioners in today's competitive healthcare environment. Our goal is to provide customized solutions that enhance your online presence, attract more patients, and ultimately help your practice thrive. By focusing on website design, SEO, social media management, and more, we are dedicated to driving measurable results and delivering a significant return on your marketing investment.</p>
            </div>

            <div className="mission-image">
              <img src={missionImg?.src} alt="Our_Mission" width={350} />
            </div>
          </div>


          {/* Our Vision*/}
          <div className="vision-container">
            <div className="vision-image">
              <img src={Our_Vision?.src} alt="Our_Vision" width={500} />
            </div>

            <div className="vision-content">
              <div className="vision-title">
                <div className="icon">
                  <img src={visionIcon?.src} alt="vision" width={40} />
                </div>
                <h1>Our <span>Vision</span></h1>
              </div>
              <p>At DetectiveSEO, our mission is to empower healthcare and physiotherapy practices with innovative and effective digital marketing strategies. We understand the unique challenges faced by small clinics and solo practitioners in today's competitive healthcare environment. Our goal is to provide customized solutions that enhance your online presence, attract more patients, and ultimately help your practice thrive. By focusing on website design, SEO, social media management, and more, we are dedicated to driving measurable results and delivering a significant return on your marketing investment.</p>
            </div>
          </div>


        </div>
      </section>
      {/* <!--====== End Mission Section ======--> */}


      {/* <!--====== Start CTA Section ======--> */}
      <section className="cta-section cta-with-particle border-bottom-primary p-b-30">
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
                  <a href="#" className=" py-2 px-5 rounded rounded-4 bg-primary text-white fw-bold fs-1">
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
              src={leftParticle?.src}
              alt="cta particle 1"
            />
            <img
              className="particle-right"
              src={rightParticle?.src}
              alt="cta particle 2"
            />
          </div>
        </div>
      </section>
      {/* <!--====== End CTA Section ======--> */}
    </Layouts>
  );
};

export default About;
