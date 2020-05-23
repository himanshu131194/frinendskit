import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions'
import CommonClass from '../CommonClass';

class PostFooter extends CommonClass(Component){
    downloadCount = React.createRef();
    checkLogin = false;
    componentDidMount(){
        this.checkLogin = this.props.user && this.props.user.auth===true;
    }
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

    render(){
        return(
                <div className="card-footer">
                <div className="likers-group">
                    {this.checkLogin 
                    ?
                        <div onClick={this.onLike} data-postid={this.props.onPost._id} data-liked={this.props.onPost.liked>0 ? true: false}  data-count={this.like_count} className={this.props.onPost.liked>0 ? "post-liked fab-wrapper post-action mr-10": "fab-wrapper post-action mr-10"}>
                            <div className="small-fab">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                            </div>
                        </div>
                    :
                        <div className="fab-wrapper post-action modal-trigger mr-10" data-modal="login-modal" onClick={this.openModal}>
                            <div className="small-fab">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                            </div>
                        </div>
                    } 
                    {this.checkLogin 
                    ?
                        <div className="fab-wrapper post-action mr-10" data-postid={this.props.onPost._id} onClick={this.onOpenComment}>
                            <div className="small-fab modal-trigger" data-modal="comment-modal" onClick={this.openModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                            </div>
                        </div>
                    :
                        <div className="fab-wrapper post-action mr-10">
                            <div className="small-fab modal-trigger" data-modal="login-modal" onClick={this.openModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                            </div>
                        </div>
                    } 
                    
                    <div className="fab-wrapper post-action mr-10" data-postid={this.props.onPost._id}>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=https://feelfunny.app/share-facebook/${this.props.onPost._id}?post_title=${this.props.onPost.title}&post_content=${this.props.onPost.url}`} className="small-fab modal-trigger share-fb">
                            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" viewBox="0 0 155.139 155.139" >
                                <path d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184   c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452   v20.341H37.29v27.585h23.814v70.761H89.584z"/>
                            </svg>
                        </a>
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