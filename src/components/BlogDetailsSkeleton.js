import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlogDetailsSkeleton = () => (
  <div className="blog-details-content p-r-40 p-r-lg-0">
    <div className="post-thumbnail">
      <Skeleton height={400} />
    </div>

    <div className="post-content">
      <ul className="post-meta">
        <li>
          <Skeleton width={100} />
        </li>
        <li>
          <Skeleton width={150} />
        </li>
        <li>
          <Skeleton width={150} />
        </li>
      </ul>
      <h3 className="post-title">
        <Skeleton width={`80%`} />
      </h3>

      <div>
        <Skeleton count={5} />
      </div>

      <blockquote className="blockquote">
        <Skeleton count={2} />
      </blockquote>

      <h4 className="post-subtitle">
        <Skeleton width={`60%`} />
      </h4>

      <p>
        <Skeleton count={3} />
      </p>
    </div>

    <div className="post-footer m-t-40">
      <ul className="related-tags">
        <li className="item-heading">Related Tags: </li>
        <li>
          <Skeleton width={80} />
        </li>
        <li>
          <Skeleton width={100} />
        </li>
        <li>
          <Skeleton width={120} />
        </li>
        <li>
          <Skeleton width={100} />
        </li>
      </ul>
      <ul className="social-links">
        <li className="item-heading">Share :</li>
        <li>
          <Skeleton circle={true} height={30} width={30} />
        </li>
        <li>
          <Skeleton circle={true} height={30} width={30} />
        </li>
        <li>
          <Skeleton circle={true} height={30} width={30} />
        </li>
        <li>
          <Skeleton circle={true} height={30} width={30} />
        </li>
      </ul>

      <div className="post-author-box">
        <div className="author-thumbnail">
          <Skeleton circle={true} height={80} width={80} />
        </div>
        <div className="author-content">
          <h4 className="name">
            <Skeleton width={`60%`} />
          </h4>
          <p>
            <Skeleton count={2} />
          </p>
          <ul className="social-links">
            <li>
              <Skeleton circle={true} height={30} width={30} />
            </li>
            <li>
              <Skeleton circle={true} height={30} width={30} />
            </li>
            <li>
              <Skeleton circle={true} height={30} width={30} />
            </li>
            <li>
              <Skeleton circle={true} height={30} width={30} />
            </li>
            <li>
              <Skeleton circle={true} height={30} width={30} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default BlogDetailsSkeleton;
