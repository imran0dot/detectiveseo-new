import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import Nav from "./Nav";
const Header7 = () => {
  const [mobileMenuTrigger, setMobileMenuTrigger] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <header className="template-header navbar-left absolute-header nav-primary-5 submenu-primary-5 sticky-header">
      <div className="container-fluid container-1430">
        <div className="header-inner">
          <div className="header-left">
            <div className="brand-logo">
              <Link href="/">
                <a>
                  <img src="assets/img/logo-3.png" alt="logo" />
                </a>
              </Link>
            </div>
            <Nav />
          </div>
          <div className="header-right">
            <ul className="header-extra">
              <li className="d-none d-sm-block">
                <Link href="/sign-in">
                  <a className="user-login">
                    <i className="far fa-user-circle"></i> Sign In
                  </a>
                </Link>
              </li>
              <li className="d-none d-md-block">
                <Link href="/services">
                  <a className="template-btn primary-bg-4 shadow-none">
                    Get Started <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </li>
              <li className="d-none d-xl-block">
                <a
                  href="#"
                  className="off-canvas-btn"
                  onClick={() => setToggle(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
              <li className="d-xl-none">
                <a
                  href="#"
                  className="navbar-toggler"
                  onClick={() => setMobileMenuTrigger(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Start Mobile Slide Menu */}
      <MobileMenu
        show={mobileMenuTrigger}
        close={() => setMobileMenuTrigger(false)}
      />
      {/* End Mobile Slide Menu */}
      <div className={`off-canvas-wrapper ${toggle ? "canvas-on" : ""}`}>
        <div className="canvas-overlay" onClick={() => setToggle(false)} />
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
          <a href="#" className="canvas-close" onClick={() => setToggle(false)}>
            <i className="fal fa-times" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header7;
