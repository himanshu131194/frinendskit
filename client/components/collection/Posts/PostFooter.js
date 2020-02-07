import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions'


class PostFooter extends Component{
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

        console.log(postId);
        
        this.props.listComments(postId, async (err, res)=>{
             if(!err){
                 console.log(res);
                 //await this.setState({ loading : 0, [postId]: res});
             }
        }) 

    }

    render(){
        return(
                <div className="card-footer">
                <div className="likers-group">
                    <div onClick={this.onLike} data-postid={this.props.onPost._id} data-liked={this.props.onPost.liked ? true: false}  data-count={this.like_count} className={this.props.onPost.liked ? "post-liked fab-wrapper post-action mr-6": "fab-wrapper post-action mr-6"}>
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
                    <div className="fab-wrapper post-action">
                        <div className="small-fab share-fab modal-trigger" data-modal="share-modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-link-2">
                                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                        </div>
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
                        <span id={`${this.props.onPost._id}_liked`}>{this.props.onPost.like_count}</span>
                    </div>
                    
                    <div className="comments-count">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span>{this.props.onPost.comment_count}</span>
                    </div>

                    <div className="shares-count">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-link-2">
                            <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        <span>{this.props.onPost.share_count}</span>
                    </div>

                </div>
            </div>
        )
    }
}



export default connect(state=>state, actions)(PostFooter);