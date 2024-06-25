import Link from 'next/link';
import React, { useEffect } from 'react';
import { axiosInstace, dateConvert, titleIntoUrl } from '../utils';
import { useGetMediaQuery } from '../features/apiSlice';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PostCard = ({ postDetails }) => {
    const { featured_media, title, date, id } = postDetails;
    const { data: image, isLoading, isError } = useGetMediaQuery(featured_media);

    const convertDate = dateConvert(date);
    const covertTitle = titleIntoUrl(title.rendered);

    return (
        <div className='mb-3'>
            <div className="single-blog-post">
                <div className="post-thumbnail">
                    {isLoading ?
                        <Skeleton height={200} /> :
                        <img
                            src={image}
                            alt="blog thumbnail one"
                            className='post-thumbnail-img'
                        />}

                </div>
                <div className="post-content">
                    <ul className="post-meta">
                        <li>
                            <a href="#" className="post-meta">
                                <i className="far fa-user"></i>DetectiveSEO
                            </a>
                        </li>
                        <li>
                            <a href="#" className="post-meta">
                                <i className="far fa-calendar-alt"></i>
                                {convertDate}
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

                    <Link href={`/blog/${id}`}>
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