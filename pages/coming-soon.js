import Link from "next/link";
import { useState } from "react";
import Layouts from "../src/layouts/Layouts";
import SearchTrigger from "../src/layouts/SearchTrigger";

const ComingSoon = () => {
  const [trigger, setTrigger] = useState(false);
  const [canva, setCanva] = useState(false);
  return (
    <Layouts noFooter noHeader>
      <SearchTrigger close={() => setTrigger(false)} trigger={trigger} />
      <header className="template-header absolute-header navbar-center sticky-header">
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              <div className="branding-and-language-selection">
                <div className="brand-logo">
                  <Link href="/">
                    <a>
                      <img src="assets/img/logo-1.png" alt="logo" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="header-right">
              <ul className="header-extra">
                <li className="d-none d-sm-block">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#search-modal"
                    className="search-btn search-border-right"
                    onClick={() => setTrigger(true)}
                  >
                    <i className="fas fa-search" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="off-canvas-btn"
                    onClick={() => setCanva(true)}
                  >
                    <span />
                    <span />
                    <span />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Start Off Canvas */}
        <div className={`off-canvas-wrapper ${canva ? "canvas-on" : ""}`}>
          <div className="canvas-overlay" onClick={() => setCanva(false)} />
          <div className="canvas-inner">
            <div className="canvas-logo">
              <img src="assets/img/logo-1.png" alt="Canvas Logo" />
            </div>
            <div className="about-us">
              <h5 className="canvas-widget-title">About Us</h5>
              <p>
                Sed perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium totam rem aperams eaque ipsa
                quae abillo inventore veritatis
              </p>
            </div>
            <div className="contact-us">
              <h5 className="canvas-widget-title">Contact Us</h5>
              <ul>
                <li>
                  <i className="far fa-map-marker-alt" />
                  354 Oakridge, Camden NJ 08102 - USA
                </li>
                <li>
                  <i className="far fa-envelope-open" />
                  <a href="mailto:support@landio.com">support@landio.com</a>
                  <a href="www.landio.net" target="_blank">
                    www.landio.net
                  </a>
                </li>
                <li>
                  <i className="far fa-phone" />
                  <span>
                    <a href="tel:+01234567899">+012 (345) 678 99</a>
                  </span>
                  <span>
                    <a href="tel:+8563214">+8563214</a>
                  </span>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="canvas-close"
              onClick={() => setCanva(false)}
            >
              <i className="fal fa-times" />
            </a>
          </div>
        </div>
        {/* End Off Canvas */}
      </header>
      <section className="coming-soon-area">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-10">
              <div className="coming-soon-content text-lg-left text-center">
                <h2 className="title">We Are Coming Soon</h2>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="newsletter-form-2"
                >
                  <input type="email" placeholder="Enter Email Address" />
                  <button type="submit">
                    <i className="far fa-arrow-right" />
                  </button>
                </form>
                <p className="newsletter-notice">
                  Join With Us To Get More Update
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-10">
              <div className="coming-soon-image text-right m-t-md-50">
                <img src="assets/img/coming-soon.png" alt="coming soon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default ComingSoon;
