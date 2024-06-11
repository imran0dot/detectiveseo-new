import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Subscribe from "../src/components/Subscribe";
import Layouts from "../src/layouts/Layouts";
import { testimonialwidgetactive } from "../src/sliderProps";
import { getPagination, pagination } from "../src/utils";
import { axiosInstace } from "../src/utils";
import PostCard from "../src/components/PostCard";

const BlogStandard = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    pagination(".single-blog-post", sort, active);
    let list = document.querySelectorAll(".single-blog-post");
    setstate(getPagination(list.length, sort));
  }, [active]);

  useEffect(()=>{
    axiosInstace.get('/posts')
      .then(res => {
        const result = res.data;
        setBlogs(result);
      })
  },[])

  return (
    <Layouts pageTitle="Blog Standard">
      <section className="blog-area p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-8">
              <div className="blog-post-items p-r-40 p-r-lg-0">
                {
                  blogs.map(blog => <PostCard postDetails={blog} key={blog?.id}  />)
                }
              </div>

              <ul className="post-pagination">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(active === 1 ? 1 : active - 1);
                    }}
                  >
                    <i className="fas fa-angle-left"></i>
                  </a>
                </li>
                {state &&
                  state.map((s, i) => (
                    <li key={i}>
                      <a
                        className={` ${active === s ? "active" : ""}`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(s);
                        }}
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(
                        active === state.length ? state.length : active + 1
                      );
                    }}
                  >
                    <i className="fas fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Start Side-bar */}

            <div className="col-lg-4">
              <div className="blog-sidebar m-t-md-80">
                <div className="widget search-widget">
                  <h4>Search Here</h4>
                  <form>
                    <input type="search" placeholder="Search" name="search" />
                    <button className="search-btn">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="widget category-widget">
                  <h4 className="widget-title">Category</h4>

                  <ul className="category-link">
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Email Marketing</a>
                    </li>
                    <li>
                      <a href="#">IT Consultancy</a>
                    </li>
                    <li>
                      <a href="#">Business Consulting</a>
                    </li>
                    <li>
                      <a href="#">Apps Development</a>
                    </li>
                    <li>
                      <a href="#">Media Marketing</a>
                    </li>
                    <li>
                      <a href="#">SEO Optimizations</a>
                    </li>
                  </ul>
                </div>
                <div className="widget latest-post-widget">
                  <h4 className="widget-title">Latest News</h4>
                  <div className="popular-posts-wrapper">
                    <div className="popular-posts-item">
                      <div className="popular-posts-thumbnail">
                        <Link href="/blog-details">
                          <a>
                            <img
                              src="assets/img/blog/latest-post-thumbnail-1.jpg"
                              alt="latest post one"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="popular-posts-item-content">
                        <h5 className="popular-posts-title">
                          <Link href="/blog-details">
                            <a>Build Seamless Spreadshet Import Experience</a>
                          </Link>
                        </h5>
                        <a href="#" className="posts-date">
                          <i className="far fa-calendar-alt"></i> 25 May 2021
                        </a>
                      </div>
                    </div>
                    <div className="popular-posts-item">
                      <div className="popular-posts-thumbnail">
                        <Link href="/blog-details">
                          <a>
                            <img
                              src="assets/img/blog/latest-post-thumbnail-2.jpg"
                              alt="latest post two"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="popular-posts-item-content">
                        <h5 className="popular-posts-title">
                          <Link href="/blog-details">
                            <a>Creating Online Environment Work Well Older</a>
                          </Link>
                        </h5>
                        <a href="#" className="posts-date">
                          <i className="far fa-calendar-alt"></i> 25 May 2021
                        </a>
                      </div>
                    </div>
                    <div className="popular-posts-item">
                      <div className="popular-posts-thumbnail">
                        <Link href="/blog-details">
                          <a>
                            <img
                              src="assets/img/blog/latest-post-thumbnail-3.jpg"
                              alt="latest post three"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="popular-posts-item-content">
                        <h5 className="popular-posts-title">
                          <Link href="/blog-details">
                            <a>Signs Website Feels More Haunted House</a>
                          </Link>
                        </h5>
                        <a href="#" className="posts-date">
                          <i className="far fa-calendar-alt"></i> 25 May 2021
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget testimonial-widget">
                  <Slider
                    {...testimonialwidgetactive}
                    className="testimonial-widget-active"
                  >
                    <div className="single-testimonial">
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae conse quatur
                        vellum rem
                      </p>

                      <div className="author">
                        <img
                          src="assets/img/testimonial/author-1.png"
                          alt="Author"
                        />
                        <h6 className="name">
                          Ricky L. Simpson
                          <span className="position">Web designer</span>
                        </h6>
                      </div>
                    </div>
                    <div className="single-testimonial">
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae conse quatur
                        vellum rem
                      </p>

                      <div className="author">
                        <img
                          src="assets/img/testimonial/author-2.png"
                          alt="Author"
                        />
                        <h6 className="name">
                          Ricky L. Simpson
                          <span className="position">Web designer</span>
                        </h6>
                      </div>
                    </div>

                    <div className="single-testimonial">
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae conse quatur
                        vellum rem
                      </p>

                      <div className="author">
                        <img
                          src="assets/img/testimonial/author-3.png"
                          alt="Author"
                        />
                        <h6 className="name">
                          Ricky L. Simpson
                          <span className="position">Web designer</span>
                        </h6>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="widget widget-tag-cloud">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tags">
                    <a href="#">Landing</a>
                    <a href="#">UI Design</a>
                    <a href="#">Web</a>
                    <a href="#">SEO</a>
                    <a href="#">Development</a>
                    <a href="#">UX/UI</a>
                    <a href="#">Consulting</a>
                    <a href="#">Mobile Apps</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </Layouts>
  );
};

export default BlogStandard;
