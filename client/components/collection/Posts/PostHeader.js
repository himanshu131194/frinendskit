import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions'
import ReactTimeAgo from 'react-time-ago'


class PostHeader extends Component{
      checkLogin = false;
      componentDidMount(){
        this.checkLogin = this.props.user && this.props.user.auth===true;
      }
      onOpenReport = (e)=>{
        e.preventDefault();
        let postId = e.currentTarget.dataset.postid;
        this.props.setPostId(postId); 
      }
      render(){
          return(
            <div className="card-heading">
                <div className="user-block">
                    <div className="image">
                        <img src={this.props.onPost.section_details.url} data-demo-src={this.props.onPost.section_details.url} alt="" />
                    </div>
                    <div className="user-info">
                        <a href={"/section/"+this.props.onPost.section_details._id} className="uppercase">{this.props.onPost.section_details.value}</a>
                        <span className="time">
                            <ReactTimeAgo date={this.props.onPost.created} timeStyle="twitter"/>
                        </span>
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
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            {this.checkLogin 
                            ?
                                <a href="#" data-postid={this.props.onPost._id}  onClick={this.onOpenReport} className="dropdown-item next-modal raised modal-trigger" data-modal="report-modal">
                                    <div className="media">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-flag"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                                        <div className="media-content">
                                            <h3>Report</h3>
                                            <small>In case of inappropriate content.</small>
                                        </div>
                                    </div>
                                </a>
                            :
                                <a href="#" data-postid={this.props.onPost._id}  onClick={this.onOpenReport} className="dropdown-item next-modal raised modal-trigger" data-modal="login-modal">
                                    <div className="media">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-flag"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                                        <div className="media-content">
                                            <h3>Report</h3>
                                            <small>In case of inappropriate content.</small>
                                        </div>
                                    </div>
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div> 
          )
      }
}

export default connect(state=>state, actions)(PostHeader);
