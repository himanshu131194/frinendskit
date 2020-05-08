import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions'
import ReactTimeAgo from 'react-time-ago'
import CommonClass from '../CommonClass';


class PostHeader extends CommonClass(Component){
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
                </div>
            </div> 
          )
      }
}

export default connect(state=>state, actions)(PostHeader);
