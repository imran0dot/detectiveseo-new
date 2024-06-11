import Link from 'next/link';
import React, { useEffect } from 'react';
import { axiosInstace } from '../utils';

const PostCard = ({postDetails}) => {
    console.log(postDetails.featured_media);
    const mediaId = postDetails.featured_media;
    console.log(postDetails);
    // useEffect(()=>{
    //     axiosInstace.get(`/media/${mediaId}`)
    //     .then(res => {
    //         const result = res.data;
    //         console.log(result?.media_details?.sizes?.large);
    //     })
    // },[])
    const { title } = postDetails;

    return (
        <div>
            <div className="single-blog-post">
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
                            </a>
                        </li>
                        <li>
                            <a href="#" className="post-meta">
                                <i className="far fa-comment-dots"></i>Comments (05)
                            </a>
                        </li>
                    </ul>
                    <h4 className="post-title">
                        <Link href="/blog-details">
                            <a>
                                {title.rendered}
                            </a>
                        </Link>
                    </h4>
                    <div className="post-excerpt">
                        <p>
                            But must explain to you how all this mistaken idea
                            denouncing pleasure and praising pain was born and will
                            give complete account of the system and expound
                        </p>
                    </div>

                    <Link href="/blog-details">
                        <a className="post-read-more">
                            Learn More <i className="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;