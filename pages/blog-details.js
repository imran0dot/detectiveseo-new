import Link from "next/link";
import Slider from "react-slick";
import Subscribe from "../src/components/Subscribe";
import Layouts from "../src/layouts/Layouts";
import { testimonialwidgetactive } from "../src/sliderProps";
// This is the single blog page
const BlogDetails = () => {
  return (
    <Layouts pageTitle="Blog Details">
      <section className="blog-area p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* <!-- Blog Content --> */}
              <div className="blog-details-content p-r-40 p-r-lg-0">
                <div className="post-thumbnail">
                  <img
                    src="assets/img/blog/blog-standard-thumbnail-1.jpg"
                    alt="blog thumbnail one"
                  />
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <a href="#" className="post-meta">
                        <i className="far fa-user"></i>Nichel Jhon
                      </a>
                    </li>
                    <li>
                      <a href="#" className="post-meta">
                        <i className="far fa-calendar-alt"></i>25 May 2021
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#" className="post-meta">
                        <i className="far fa-comment-dots"></i>Comments (05)
                      </a>
                    </li>
                  </ul>
                  <h3 className="post-title">
                    <Link href="/blog-details">
                      <a>
                        Multiplayer Text Adventure Engine In Node Game Engine
                        Server Design Optimizing
                      </a>
                    </Link>
                  </h3>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quoe
                  </p>

                  <blockquote className="blockquote">
                    <p>
                      Combinin Graphica And Voice Interfaces For Better User
                      Experience Deceive Avoiding Bias
                    </p>
                    <cite>Bailey Dobson</cite>
                  </blockquote>

                  <h4 className="post-subtitle">
                    Ensure Your Design System Achieve
                  </h4>

                  <p>
                    No one rejects, dislikes, or avoids pleasure itself, because
                    it is pleasure, but because those who do not know how to
                    pursue pleasure rationally encounter consequences that
                    extremely painful. Nor again is there anyone who loves or
                    pursues or desires to obtain pain of itself, because it is
                    pain, but because occasionally circumstances occur in which
                    toil and pain can procure him some great pleasure.
                  </p>
                </div>
                <div className="post-footer m-t-40">
                  <ul className="related-tags">
                    <li className="item-heading">Related Tags: </li>
                    <li>
                      <a href="#">Landing</a>
                    </li>
                    <li>
                      <a href="#">UI Design</a>
                    </li>
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">Mobile Apps</a>
                    </li>
                  </ul>
                  <ul className="social-links">
                    <li className="item-heading">Share :</li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>

                  <div className="post-author-box">
                    <div className="author-thumbnail">
                      <img
                        src="assets/img/blog/author-thumbnail.jpg"
                        alt="Post Author"
                      />
                    </div>
                    <div className="author-content">
                      <h4 className="name">Nathan George</h4>
                      <p>
                        Quis autem veleum iure reprehenderit quinea voluptate
                        esse quam molestiae consequatu velillum dolorem fugiat
                        quo voluptas nulla pariano one rejects
                      </p>
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Comments Template --> */}
              <div className="comments-template">
                <h4 className="template-title">People Comments</h4>

                <ul className="comments-list">
                  <li className="comment">
                    <div className="comment-body">
                      <div className="avatar">
                        <img
                          src="assets/img/blog/comment-avatar-1.jpg"
                          alt="comment author one"
                        />
                      </div>
                      <div className="comment-content">
                        <h5 className="author-name">
                          John F. Medina
                          <span className="date">25 May, 2021</span>
                        </h5>

                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam eaquequasi
                        </p>
                        <a href="#comment-respond" className="reply">
                          Reply
                        </a>
                      </div>
                    </div>
                    <ul className="children">
                      <li>
                        <div className="comment-body">
                          <div className="avatar">
                            <img
                              src="assets/img/blog/comment-avatar-2.jpg"
                              alt="comment author two"
                            />
                          </div>
                          <div className="comment-content">
                            <h5 className="author-name">
                              Jeffrey T. Kelly
                              <span className="date">25 May, 2021</span>
                            </h5>

                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam eaquequasi
                            </p>
                            <a href="#comment-respond" className="reply">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="comment">
                    <div className="comment-body">
                      <div className="avatar">
                        <img
                          src="assets/img/blog/comment-avatar-3.jpg"
                          alt="comment author three"
                        />
                      </div>
                      <div className="comment-content">
                        <h5 className="author-name">
                          Richard B. Zellmer
                          <span className="date">25 May, 2021</span>
                        </h5>

                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam eaquequasi
                        </p>
                        <a href="#comment-respond" className="reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="comments-respond" id="comment-respond">
                  <h4 className="template-title">Leave A Reply</h4>

                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-field m-b-20">
                          <input
                            type="text"
                            placeholder="Your Full Name"
                            name="name"
                            required=""
                          />
                          <div className="icon">
                            <i className="far fa-user-alt"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-field m-b-20">
                          <input
                            type="email"
                            placeholder="Your Email "
                            name="email"
                            required=""
                          />
                          <div className="icon">
                            <i className="far fa-envelope"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-field textarea-field m-b-20">
                          <textarea
                            placeholder="Write Message"
                            name="message"
                          ></textarea>
                          <div className="icon">
                            <i className="far fa-pencil-alt"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-field">
                          <button className="template-btn">
                            Send Comments <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
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

export default BlogDetails;
