import Link from "next/link";
import Slider from "react-slick";
import Subscribe from "../../src/components/Subscribe";
import Layouts from "../../src/layouts/Layouts";
import { testimonialwidgetactive } from "../../src/sliderProps";
import { useFindIdByTitleQuery, useGetBlogQuery, useGetMediaQuery } from "../../src/features/apiSlice";
import { useRouter } from "next/dist/client/router";
import { UrlToTitle } from "../../src/utils";
import BlogDetailsSkeleton from "../../src/components/BlogDetailsSkeleton";

import Head from "next/head";

// This is the single blog page
const BlogDetails = () => {
  // find id using url 
  const { asPath } = useRouter();
  const getTitlePatchFromPath = asPath.split('/')[2];

  // const covertUrlToTitle = UrlToTitle(getTitlePatchFromPath);
  // const blogId = useFindIdByTitleQuery(covertUrlToTitle);


  // get exact data using Id 
  const { data, isLoading, isError } = useGetBlogQuery(getTitlePatchFromPath);

  console.log(data);
  const { data: image, isLoading: imageLoading, isError: imageError } = useGetMediaQuery(data?.featured_media);

  return (
    <Layouts pageTitle="Blog Details">
      <Head>
        <title>DetectiveSEO | Blog | Blog-Details-{getTitlePatchFromPath}</title>
      </Head>
      <section className="blog-area p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* <!-- Blog Content --> */}
              {isLoading ? <BlogDetailsSkeleton /> :
                <div className="blog-details-content p-r-40 p-r-lg-0">
                  <div className="post-thumbnail">
                    <img
                      src={image}
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
                      {data?.title?.rendered}
                    </h3>

                    <div dangerouslySetInnerHTML={{ __html: data ? data?.content?.rendered : '' }}></div>


                    {/* <blockquote className="blockquote">
                      <p>
                        Combinin Graphica And Voice Interfaces For Better User
                        Experience Deceive Avoiding Bias
                      </p>
                      <cite>Bailey Dobson</cite>
                    </blockquote> */}

                    {/* <h4 className="post-subtitle">
                      Ensure Your Design System Achieve
                    </h4> */}

                    {/* <p>
                      No one rejects, dislikes, or avoids pleasure itself, because
                      it is pleasure, but because those who do not know how to
                      pursue pleasure rationally encounter consequences that
                      extremely painful. Nor again is there anyone who loves or
                      pursues or desires to obtain pain of itself, because it is
                      pain, but because occasionally circumstances occur in which
                      toil and pain can procure him some great pleasure.
                    </p> */}
                  </div>


                  <div className="post-footer m-t-40">
                    {/* Tags */}
                    {/* <ul className="related-tags">
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
                    </ul> */}

                    {/* Share */}
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

                  </div>
                </div>
              }
            </div>

          </div>
        </div>
      </section>
      <Subscribe />
    </Layouts>
  );
};

export default BlogDetails;
