import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import Nav from "./Nav";
const Header9 = () => {
  const [mobileMenuTrigger, setMobileMenuTrigger] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <header className="template-header navbar-center absolute-header nav-primary-7 nav-border-bottom sticky-header">
      <div className="container-fluid container-1430">
        <div className="header-inner">
          <div className="header-left">
            <div className="brand-logo">
              <Link href="/">
                <a>
                  <img src="assets/img/logo-5.png" alt="logo" />
                </a>
              </Link>
            </div>
          </div>
          <div className="header-center">
            <Nav />
          </div>
          <div className="header-right">
            <ul className="header-extra">
              <li className="d-none d-md-block">
                <Link href="/sign-up">
                  <a className="template-btn">
                    {`Lat's talk us`} <i className="fas fa-arrow-right" />
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
    </header>
  );
};

export default Header9;
