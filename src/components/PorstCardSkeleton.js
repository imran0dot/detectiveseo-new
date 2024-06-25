import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const PostCardSkeleton = () => (
    <div className="single-blog-post">
      <div className="post-thumbnail">
        <Skeleton height={200} />
      </div>
      <div className="post-content">
        <ul className="post-meta">
          <li>
            <Skeleton width={100} />
          </li>
          <li>
            <Skeleton width={100} />
          </li>
          <li>
            <Skeleton width={100} />
          </li>
        </ul>
        <h4 className="post-title">
          <Skeleton width={`60%`} />
        </h4>
        <div className="post-excerpt">
          <Skeleton count={3} />
        </div>
        <Skeleton width={100} />
      </div>
    </div>
  );


export default PostCardSkeleton;