import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import Nav from "./Nav";
const Header3 = () => {
  const [mobileMenuTrigger, setMobileMenuTrigger] = useState(false);
  return (
    <header className="template-header navbar-right absolute-header nav-white-color submenu-seconday-color nav-border-bottom sticky-header">
      <div className="container">
        <div className="header-inner">
          <div className="header-left">
            <div className="brand-logo">
              <Link href="/">
                <a>
                  <img
                    src="assets/img/logo-white-2.png"
                    alt="logo"
                    className="main-logo"
                  />
                  <img
                    src="assets/img/logo-4.png"
                    alt="logo"
                    className="sticky-logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="header-right">
            <Nav />
            <ul className="header-extra">
              <li className="d-none d-md-block">
                <Link href="/services">
                  <a className="template-btn secondary-bg">
                    Get Started <i className="fas fa-arrow-right" />
                  </a>
                </Link>
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
    </header>
  );
};

export default Header3;
