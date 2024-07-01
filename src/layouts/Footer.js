import Link from "next/link";
import trustpilod from '../../public/assets/img/icon/trustpilot.svg'
const Footer = () => {
  return (
    <footer className="template-footer">
      <div className="container">
        <div className="footer-widgets p-t-80 p-b-30">
          <div className="row">
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget text-block-widget">
                <h5 className="widget-title">About DetectiveSEO</h5>
                <p>
                  With over a decade of experience exclusively focused on healthcare and physiotherapy marketing, our team intimately understands the unique challenges and needs of private practices.
                </p>

                <ul className="social-links m-t-20">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100090771304375">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  
                  
                  <li>
                    <a href="https://www.linkedin.com/in/abdulmannan132/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/abdul_mannan_himel/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.trustpilot.com/review/detectiveseo.com">
                      <i className="fa-solid fa-star" ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="d-lg-flex justify-content-center">
                <div className="widget nav-widget">
                  <h5 className="widget-title">Resources</h5>
                  <ul>
                    <li>
                      <Link href="/about">
                        <a>About Company</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>Our Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact & Support</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms_condition">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy_policy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/refound_policy">
                        <a>Refound Policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="d-lg-flex justify-content-center">
                <div className="widget nav-widget">
                  <h5 className="widget-title">Location</h5>
                  <div className="map">
                    <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.3767930410313!2d90.02627677535409!3d24.33336407827708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37560330a8f99541%3A0xbca4f66b12138aa1!2sLocal%20and%20Small%20Business%20SEO%20%7C%20Detective%20SEO!5e0!3m2!1sen!2sbd!4v1717848217097!5m2!1sen!2sbd" width={300} height={200}></iframe>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget pl-xl-5">
                <h5 className="widget-title">Live Chat</h5>
                <ul>
                  <li className="m-b-10">
                    <Link href="https://m.me/100090771304375">
                      <a className="template-btn shadow-none">
                        <i className="fab fa-facebook-f mr-2"></i>
                        Facebook
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://wa.me/8801841129353">
                      <a className="template-btn " style={{ backgroundColor:'#2ed14b', border:'none', color:'black'}}>
                        <i className="fab fa-whatsapp mr-2"></i>
                        What's App 
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-copyright border-top-primary">
          <div className="row align-items-center justify-content-between">
            <div className="col-sm-auto col-12">
              <div className="copyright-logo text-center text-sm-left">
                {/* <img src="assets/img/logo-1.png" alt="Landio" /> */}
                <Link href="/">
                    <a className="nav-text">
                      {/* TODO  */}
                      <img src="assets/img/detectiveseo.png" alt="logo" width={250} />
                      
                    </a>
                  </Link>
              </div>
            </div>
            <div className="col-sm-auto col-12">
              <p className="copyright-text text-center text-sm-right pt-4 pt-sm-0">
                © {new Date().getFullYear()} <a href="#">DetectiveSEO</a>. All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
