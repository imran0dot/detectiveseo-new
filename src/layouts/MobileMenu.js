import Link from "next/link";
import { useState } from "react";
import { Blog, Demos, Pages1st, Pages2nd, Portfolio, Services } from "./Menus";
const MobileMenu = ({ show, close }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <div className={`mobile-slide-panel ${show ? "panel-on" : ""}`}>
      <div className="panel-overlay" onClick={() => close()}></div>
      <div className="panel-inner">
        <div className="mobile-logo">
          {/* <Link href="/">
            <a>
              <img src="assets/img/logo-1.png" alt="Landio" />
            </a>
          </Link> */}
          <Link href="/">
            <a className="" style={{fontSize:"25px", fontWeight:"bold", color:"black"}}>
              Detective <span className="nav-text-symbol">SEO</span>
            </a>
          </Link>
        </div>
        <nav className="mobile-menu">
          <ul>
            {/* Home */}
            <li>
              <Link href="/">
                <a>
                  Home
                </a>
              </Link>
            </li>

            {/* Services */}

            <li>
              <Link href="/services">
                <a>
                  Services
                </a>
              </Link>
              <ul className="sub-menu" style={activeLi("Services")}>
                <Services />
              </ul>
            </li>

            {/* Services */}

            <li>
              <Link href="/case_study">
                <a>
                  Case Study
                </a>
              </Link>
              <ul className="sub-menu" style={activeLi("Services")}>
                <Services />
              </ul>
            </li>

            {/* Pages */}

            {/* <li>
              <a href="#">
                Pages
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("Pages")}
                >
                  <i className="fas fa-angle-down"></i>
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("Pages")}>
                <Pages1st />
                <Portfolio />
                <Pages2nd />
              </ul>
            </li> */}

            {/* Blog */}
            <li>
              <Link href="/blog-standard">
                <a>
                  Blog
                </a>
              </Link>
            </li>

            {/* About us */}
            <li>
              <Link href="/about">
                <a>
                  About
                </a>
              </Link>
            </li>

            {/* Contact US */}

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

        </nav>
        <a href="#" className="panel-close" style={{marginTop:"28px"}} onClick={() => close()}>
          <i className="fal fa-times"></i>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
