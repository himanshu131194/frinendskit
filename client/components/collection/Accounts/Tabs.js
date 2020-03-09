
import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actions from '../../actions'
import { Link } from "react-router-dom"


class Tabs extends Component{
    state = {
        tabType : null
    }
    onChangeTab = (e)=>{
        e.preventDefault();
        const {type} = e.currentTarget.dataset;
        this.props.onAccountPostType(type);
    }
    render(){
        return(
            <div className="options-nav no-shadow">
                <div className="container is-fluid">
                    <div className="nav-inner is-friends uppercase space-bw">
                        <div className="option-tabs uppercase">
                            <a className="option-tab is-active pl-10 pr-10" data-tab="all-friends">
                                <span>my account</span>
                            </a>     
                        </div>
                        <div className="option-tabs uppercase">
                            {/* <a className="option-tab pl-10 pr-10" data-tab="all-friends">
                                <span>liked</span>
                            </a>
                            <a className="option-tab pl-10 pr-10" data-tab="starred-friends">
                                <span>commented</span>
                            </a> */}
                            <a className="option-tab pl-10 pr-10" data-tab="new-friends">
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
                        <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a href="/account/all" data-type="upload" className="dropdown-item raised">
                                    <div className="media">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                        <div className="media-content">
                                            <h3>Uploaded</h3>
                                        </div>
                                        <div>
                                        <small>92</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="/account/liked-posts" data-type="like" className="dropdown-item raised">
                                    <div className="media">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                        <div className="media-content">
                                            <h3>Liked</h3>
                                        </div>
                                        <div>
                                            <small>45</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="/account/commented-posts" data-type="comment" className="dropdown-item raised">
                                    <div className="media">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                        <div className="media-content">
                                            <h3>Commented</h3>
                                        </div>
                                        <div>
                                            <small>34</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="/account/downloaded-posts" data-type="download" className="dropdown-item raised">
                                    <div className="media">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                                        <div className="media-content">
                                            <h3>Downloaded</h3>
                                        </div>
                                        <div>
                                            <small>2</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                            </a>
                        {/* <div className="option-naver"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state=>state, actions)(Tabs);