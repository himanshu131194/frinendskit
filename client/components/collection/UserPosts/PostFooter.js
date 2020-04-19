import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions'

import axios from 'axios';


class PostFooter extends Component{
    state = {
        downloadLoading : 0,
    }
    downloadCount = React.createRef();
    onLike = (e)=>{
        e.preventDefault();
        const ele = e.currentTarget;
        const { postid, liked, count } = ele.dataset;
        const flag = liked==='false' ? true : false;
              ele.dataset.liked = flag.toString();
        
        this.props.postLiked( postid, flag, (err, data)=>{
              if(data){
                if(flag){
                    ele.classList.add('post-liked');
                    document.getElementById(`${postid}_liked`).innerHTML = data.like_count;
                }else{
                    ele.classList.remove('post-liked');
                    document.getElementById(`${postid}_liked`).innerHTML = data.like_count;
                }
              }
        });
    }

    onOpenComment = (e)=>{
        e.preventDefault(); 	   
        let postId = e.currentTarget.dataset.postid;
        this.props.setPostId(postId); 
        this.props.listComments(postId); 
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
            let downloadCounter = this.downloadCount.current.innerHTML;
            this.downloadCount.current.innerHTML = parseInt(downloadCounter)+1; 
        })
    }

    render(){
        return(
                <div className="card-footer">
                <div className="likers-group">
                    <div onClick={this.onLike} data-postid={this.props.onPost._id} data-liked={this.props.onPost.liked>0 ? true: false}  data-count={this.like_count} className={this.props.onPost.liked>0 ? "post-liked fab-wrapper post-action mr-6": "fab-wrapper post-action mr-6"}>
                        <div className="small-fab">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                        </div>
                    </div> 
                    <div className="fab-wrapper post-action mr-6" data-postid={this.props.onPost._id} onClick={this.onOpenComment}>
                        <div className="small-fab modal-trigger" data-modal="comment-modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                        </div>
                    </div> 
                    <div className="fab-wrapper post-action"  data-id={this.props.onPost._id} data-url={this.props.onPost.url} data-section={this.props.onPost.section_details.value} data-ext={this.props.onPost.ext} onClick={this.downLoadOnpage}>
                        
                        {
                         this.state.downloadLoading==0
                           ?
                            <div className="small-fab share-fab modal-trigger">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-link-2">
                                    <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg> */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 21.825 21.825" className="download-arrow-svg"> 
                                    <path d="M16.791,13.254c0.444-0.444,1.143-0.444,1.587,0c0.429,0.444,0.429,1.143,0,1.587l-6.65,6.651  c-0.206,0.206-0.492,0.333-0.809,0.333c-0.317,0-0.603-0.127-0.81-0.333l-6.65-6.651c-0.444-0.444-0.444-1.143,0-1.587  s1.143-0.444,1.587,0l4.746,4.762V1.111C9.791,0.492,10.299,0,10.918,0c0.619,0,1.111,0.492,1.111,1.111v16.904L16.791,13.254z">
                                    </path>
                                </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                                </svg>
                            </div>
                            :
                            <div className="d-flex">
                                <a className="load-more-button loading"></a>
                            </div>
                        } 
                    </div>
                </div>
                <div className="social-count">
                    
                    <div className="likes-count">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                        <span id={`${this.props.onPost._id}_liked`}>{this.props.onPost.like_count}</span>
                    </div>
                    
                    <div className="comments-count">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span>{this.props.onPost.comment_count}</span>
                    </div>

                    <div className="shares-count">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-link-2">
                            <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                        <span ref={this.downloadCount}>{this.props.onPost.download_count}</span>
                    </div>

                </div>
            </div>
        )
    }
}



export default connect(state=>state, actions)(PostFooter);