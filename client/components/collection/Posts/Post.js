import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'

class Post extends Component{
    componentDidMount(){
        this.props.listPosts();
    }
    render(){
        return(
               <Fragment>
                   {this.props.listOfPosts && this.props.listOfPosts.map((result)=>{
                           return(
                            <div key={result._id} className="card is-post br-0 border-0">
                            <div className="content-wrap">
                            {/* HEADING */}
                            <div className="card-heading">
                                <div className="user-block">
                                    <div className="image">
                                        <img src="http://pngimg.com/uploads/football/football_PNG52781.png" data-demo-src="http://pngimg.com/uploads/football/football_PNG52781.png" data-user-popover="1" alt="" />
                                    </div>
                                    <div className="user-info">
                                        <a href="#" className="uppercase">funny</a>
                                        <span className="time">July 26 2018, 01:03pm</span>
                                    </div>
                                </div>
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div className="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
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
                                    <p>
                                        <a href="#">Concert in LA. Was totally fantastic! People were really excited about this one!</a> 
                                    </p>
                                </div>
                                <div className="post-image">
                                    <a data-fancybox="post1" data-lightbox-type="comments" data-thumb="https://friendkit.cssninja.io/assets/images/demo/unsplash/1.jpg" href="https://friendkit.cssninja.io/assets/images/demo/unsplash/1.jpg" data-demo-href="https://friendkit.cssninja.io/assets/images/demo/unsplash/1.jpg">
                                        <img src={result.url} data-demo-src={result.url} alt="" />
                                    </a>
                                </div>
                            </div>
                            {/* FOOTER */}
                            <div className="card-footer">
                                <div className="likers-group">
                                    <div className="fab-wrapper is-comment mr-6">
                                        <a href="javascript:void(0);" className="small-fab">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                        </a>
                                    </div> 
                                    <div className="fab-wrapper is-comment mr-6">
                                        <a href="javascript:void(0);" className="small-fab">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </div> 
                                    <div className="fab-wrapper is-share">
                                        <a href="javascript:void(0);" className="small-fab share-fab modal-trigger" data-modal="share-modal">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-link-2">
                                                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                            </svg>
                                        </a>
                                    </div>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                        <span>27</span>
                                    </div>
                                    <div className="shares-count">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-link-2">
                                            <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                        <span>9</span>
                                    </div>
                                    <div className="comments-count">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                        </svg>
                                        <span>3</span>
                                    </div>
                                </div>
                            </div>

                            </div>
                    </div>
                    )
                 })}
                </Fragment>
        )
    }
}

export default connect(state=>state, actions)(Post);