import Link from "next/link";
import { Blog, Demos, Pages1st, Pages2nd, Portfolio, Services } from "../Menus";
const Nav = () => {
  return (
    <nav className="nav-menu d-none d-xl-block">
      <ul>
        <li className="active">
          <Link href="/">
            <a>
              Demos
              <span className="dd-trigger">
                <i className="fas fa-angle-down" />
              </span>
            </a>
          </Link>
          <ul className="sub-menu">
            <Demos />
          </ul>
        </li>
        <li>
          <Link href="/services">
            <a>
              Solutions
              <span className="dd-trigger">
                <i className="fas fa-angle-down" />
              </span>
            </a>
          </Link>
          <ul className="sub-menu">
            <Services />
          </ul>
        </li>
        <li>
          <a href="#">
            Pages
            <span className="dd-trigger">
              <i className="fas fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <Pages1st />
            <li>
              <Link href="/portfolio">
                <a>
                  Portfolio
                  <span className="dd-trigger">
                    <i className="fas fa-angle-down" />
                  </span>
                </a>
              </Link>
              <ul className="sub-menu">
                <Portfolio />
              </ul>
            </li>
            <Pages2nd />
          </ul>
        </li>
        <li>
          <Link href="/blog-standard">
            <a>
              Blog
              <span className="dd-trigger">
                <i className="fas fa-angle-down" />
              </span>
            </a>
          </Link>
          <ul className="sub-menu">
            <Blog />
          </ul>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
