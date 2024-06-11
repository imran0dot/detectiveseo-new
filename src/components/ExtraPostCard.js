import React from 'react';

const ExtraPostCard = () => {
    return (
        <div>
            <div className="single-blog-post">
                <div className="post-thumbnail">
                    <img
                        src="assets/img/blog/blog-standard-thumbnail-2.jpg"
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
                                Multiplayer Text Adventure Engine In Node Game Engine
                                Server Design Optimizing
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
            <div className="single-blog-post no-thumbnail">
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
                                Postmortem Of Gutenberg The Launch So We Can Embrace
                                Gutenberg The Product
                            </a>
                        </Link>
                    </h4>
                    <div className="post-excerpt">
                        <p>
                            But must explain to you how all this mistaken idea of
                            denouncing pleasure and praising pain was born and
                            complete account
                        </p>
                    </div>

                    <Link href="/blog-details">
                        <a className="post-read-more">
                            Learn More <i className="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="single-blog-post thumbnail-cover">
                <div className="post-thumbnail">
                    <img
                        src="assets/img/blog/blog-standard-thumbnail-3.jpg"
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
                                Postmortem Of Gutenberg The Launch So We Can Embrace
                                Gutenberg The Product
                            </a>
                        </Link>
                    </h4>
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

export default ExtraPostCard;