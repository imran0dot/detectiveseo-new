import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import Subscribe from "../src/components/Subscribe";
import Layouts from "../src/layouts/Layouts";
import PostCard from "../src/components/PostCard";
import Head from "next/head";
import { useGetAllBlogQuery } from "../src/features/apiSlice";
import PostCardSkeleton from "../src/components/PorstCardSkeleton";

const BlogStandard = () => {
  const [perPage, setPerPage] = useState(2);
  
  const { data: blogs, error, isError, isLoading } = useGetAllBlogQuery(perPage); 

  let content = <></>

  if (blogs?.length && !isError && !isLoading) {
    content = blogs?.map(blog => <PostCard postDetails={blog} key={blog?.id} />)
  };

  if (blogs?.length < 0 && !isError && !isLoading) {
    content =
      <div
        className="error-page-content p-t-80 wow fadeInUp"
        data-wow-delay="0.2s"
        data-wow-duration="1500ms"
      >
        <h2>OPPS!</h2>
        <p>No Post Found</p>
        <Link href="/">
          <a className="template-btn m-t-35">
            Back To Home <i className="fas fa-arrow-right"></i>
          </a>
        </Link>
      </div>
  };

  if (!blogs?.length && isError && !isLoading) {
    content =
      <div
        className="error-page-content p-t-80 wow fadeInUp text-center"
        data-wow-delay="0.2s"
        data-wow-duration="1500ms"
      >
        <h2>OPPS!</h2>
        <p>Something went wrong!</p>
        <Link href="/">
          <a className="template-btn m-t-35">
            Back To Home <i className="fas fa-arrow-right"></i>
          </a>
        </Link>
      </div>
  };

  if (isLoading) {
    content = <PostCardSkeleton />
  };



  return (
    <Layouts pageTitle="Blog">

      <Head>
        <title>DetectiveSEO | Blog</title>
      </Head>

      <section className="blog-area p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-8">
              <div className="blog-post-items p-r-40 p-r-lg-0">
                {content}

                {isLoading ?
                  <PostCardSkeleton /> : ""}
              </div>


              {/* post pagination  */}
              <div className="text-center cursor-pointer">
                <button disabled={isLoading} className="template-btn" onClick={() => setPerPage(pre => pre + 2)}>
                  Load More<i className="fas fa-arrow-right"></i>
                </button>
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
