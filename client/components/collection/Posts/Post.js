import React, {Component} from 'react';

class Post extends Component{
    render(){
        return(
                <div className="card is-post">
                        <div className="content-wrap">


                        {/* HEADING */}
                        <div className="card-heading">
                            <div className="user-block">
                                <div className="image">
                                    <img src="https://friendkit.cssninja.io/assets/images/avatars/dan.jpg" data-demo-src="https://friendkit.cssninja.io/assets/images/avatars/dan.jpg" data-user-popover="1" alt="" />
                                </div>
                                <div className="user-info">
                                    <a href="#">Dan Walker</a>
                                    <span className="time">July 26 2018, 01:03pm</span>
                                </div>
                            </div>
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                    <div className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="12" cy="5" r="1"></circle>
                                            <circle cx="12" cy="19" r="1"></circle>
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* BODY */}
                        <div className="card-body">
                            <div className="post-text">
                                <p>Yesterday with
                                    <a href="#">@Karen Miller</a> and
                                    <a href="#">@Marvin Stemperd</a> at the
                                    <a href="#">#Rock'n'Rolla</a> concert in LA. Was totally fantastic! People were really excited about this one!</p>
                            </div>
                            <div className="post-image">
                                <a data-fancybox="post1" data-lightbox-type="comments" data-thumb="https://friendkit.cssninja.io/assets/images/demo/unsplash/1.jpg" href="https://friendkit.cssninja.io/assets/images/demo/unsplash/1.jpg" data-demo-href="https://friendkit.cssninja.io/assets/images/demo/unsplash/1.jpg">
                                    <img src="https://friendkit.cssninja.io/assets/images/demo/unsplash/1.jpg" data-demo-src="https://friendkit.cssninja.io/assets/images/demo/unsplash/1.jpg" alt="" />
                                </a>
                                <div className="like-wrapper">
                                    <a href="javascript:void(0);" className="like-button is-active">
                                        <i className="mdi mdi-heart not-liked bouncy"></i>
                                        <i className="mdi mdi-heart is-liked bouncy"></i>
                                        <span className="like-overlay"></span>
                                    </a>
                                </div>

                                <div className="fab-wrapper is-share">
                                    <a href="javascript:void(0);" className="small-fab share-fab modal-trigger" data-modal="share-modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-link-2">
                                            <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                    </a>
                                </div>

                                <div className="fab-wrapper is-comment">
                                    <a href="javascript:void(0);" className="small-fab">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle">
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* FOOTER */}
                        <div className="card-footer">
                            <div className="likers-group">
                                <img src="https://friendkit.cssninja.io/assets/images/avatars/dan.jpg" data-demo-src="https://friendkit.cssninja.io/assets/images/avatars/dan.jpg" data-user-popover="1" alt=""/>
                                <img src="https://friendkit.cssninja.io/assets/images/avatars/david.jpg" data-demo-src="https://friendkit.cssninja.io/assets/images/avatars/david.jpg" data-user-popover="4" alt=""/>
                                <img src="https://friendkit.cssninja.io/assets/images/avatars/edward.jpeg" data-demo-src="https://friendkit.cssninja.io/assets/images/avatars/edward.jpeg" data-user-popover="5" alt=""/>
                                <img src="https://friendkit.cssninja.io/assets/images/avatars/milly.jpg" data-demo-src="https://friendkit.cssninja.io/assets/images/avatars/milly.jpg" data-user-popover="7" alt=""/>
                            </div>
                            <div className="likers-text">
                                <p>
                                    <a href="#">Milly</a>,
                                    <a href="#">David</a>
                                </p>
                                <p>and 23 more liked this</p>
                            </div>
                            <div className="social-count">
                                <div className="likes-count">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                    <span>27</span>
                                </div>
                                <div className="shares-count">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-link-2">
                                        <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                    </svg>
                                    <span>9</span>
                                </div>
                                <div className="comments-count">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>

                        </div>
                </div>
        )
    }
}

export default Post;