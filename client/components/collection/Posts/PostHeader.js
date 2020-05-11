import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions'
import ReactTimeAgo from 'react-time-ago'
import CommonClass from '../CommonClass';


class PostHeader extends CommonClass(Component){
      state = {
        downloadLoading : 0
      }
      checkLogin = false;
      componentDidMount(){
        this.checkLogin = this.props.user && this.props.user.auth===true;
      }
      onOpenReport = (e)=>{
        e.preventDefault();
        let postId = e.currentTarget.dataset.postid;
        this.props.setPostId(postId); 
      }
      downLoadOnpage = async (e)=>{
        e.preventDefault();
        this.setState({ downloadLoading: 1});
        const {id, url, ext, section} = e.currentTarget.dataset;
        this.props.downloadContent(url, id, (err, data)=>{
            const blob = new Blob([data], {type: 'image/*'})
            let a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = `${id}_${section}.${ext}`
            a.click();
            this.setState({ downloadLoading: 0});
            // let downloadCounter = this.downloadCount.current.innerHTML;
            // this.downloadCount.current.innerHTML = parseInt(downloadCounter)+1; 
        })
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
                    <div className="fab-wrapper post-action"  data-id={this.props.onPost._id} data-url={this.props.onPost.url} data-section={this.props.onPost.section_details.value} data-ext={this.props.onPost.ext} onClick={this.downLoadOnpage}>
                        {
                         this.state.downloadLoading==0
                           ?
                            <div className="small-fab share-fab modal-trigger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                                </svg>
                            </div>
                            :
                            <div className="d-flex">
                                <a className="load-more-button loading wait-download"></a>
                            </div>
                        } 
                    </div>
                </div>
            </div> 
          )
      }
}

export default connect(state=>state, actions)(PostHeader);
