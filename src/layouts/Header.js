import Link from "next/link";
import { Fragment, useState } from "react";
import { Blog, Demos, Pages1st, Pages2nd, Portfolio, Services } from "./Menus";
import MobileMenu from "./MobileMenu";
import SearchTrigger from "./SearchTrigger";

const Header = () => {
  const [trigger, setTrigger] = useState(false);
  const [mobileMenuTrigger, setMobileMenuTrigger] = useState(false);

  return (
    <Fragment>
      <header className="template-header navbar-center sticky-header">
        <div className="container-fluid container-1430">
          <div className="header-inner">
            <div className="header-left">
              <div className="branding-and-language-selection">
                <div className="brand-logo">
                  <Link href="/">
                    <a className="nav-text">
                      {/* TODO  */}
                      {/* <img src="assets/img/logo-1.png" alt="logo" /> */}
                      Detective <span className="nav-text-symbol">SEO</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="header-center">
              <nav className="nav-menu d-none d-xl-block">
                <ul>
                  <li>
                    <Link href="/">
                      <a>
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>
                        Services
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/case_study">
                      <a>
                        Case Study
                      </a>
                    </Link>
                  </li>

                  {/* <li className="page__container">
                    <a href="#">
                      Pages
                      <span className="dd-trigger">
                        <i className="fas fa-angle-down"></i>
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <Pages1st />
                      <li>
                        <Link href="/portfolio">
                          <a>
                            Portfolio
                            <span className="dd-trigger">
                              <i className="fas fa-angle-down"></i>
                            </span>
                          </a>
                        </Link>
                        <ul className="sub-menu">
                          <Portfolio />
                        </ul>
                      </li>
                      <Pages2nd />
                    </ul>
                  </li> */}

                  <li>
                    <Link href="/blog-standard">
                      <a>
                        Blog
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>
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
                    <i className="fas fa-search"></i>
                  </a>
                </li>
                <li className="d-none d-lg-block">
                  <Link href="/services">
                    <a className="template-btn">
                      Get Free Audit <i className="fas fa-arrow-right"></i>
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

        {/* <!-- Start Mobile Slide Menu --> */}
        <MobileMenu
          show={mobileMenuTrigger}
          close={() => setMobileMenuTrigger(false)}
        />
        {/* <!-- End Mobile Slide Menu --> */}
      </header>
      <SearchTrigger close={() => setTrigger(false)} trigger={trigger} />
    </Fragment>
  );
};

export default Header;
