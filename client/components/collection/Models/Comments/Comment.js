import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../../../actions'

class Comment extends Component{
    
    commentLiked = React.createRef();
    commentCount = React.createRef();
    commentText = React.createRef();

    upvoteComment = (e)=>{
        const ele = e.currentTarget,
              flag = parseInt(ele.dataset.liked)===0 ? true : false;
              
        this.props.upvoteComments(ele.dataset.id, ele.dataset.postid, flag, (err, data)=>{
              if(data){
                this.commentCount.current.innerHTML = data.points;
                if(flag){
                    ele.dataset.liked =  1;
                    ele.classList.add('liked-comment');
                    this.commentCount.current.classList.add('liked-comment');
                }else{
                    ele.dataset.liked =  0;
                    ele.classList.remove('liked-comment');
                    this.commentCount.current.classList.remove('liked-comment');
                }
              }
        });
     }

     deleteComment = (e)=>{
         e.preventDefault();
         this.props.onCommentChange(1);
         const {commentid, postid} = e.target.dataset;
         this.props.deleteComment(postid, commentid, (err, data)=>{
              if(data){
                //REFRESH COMMENTS LIST 
                this.props.listComments(postid); 
                this.props.onCommentChange(0);
              }
         });
     }

     render(){
         return(
                 <div className="media is-comment m-0">
                    <div className="media-left comment-media-left">
                        <div className="image">
                            <img src={this.props.onLoadedComment.user_details.profile_pic} data-demo-src={this.props.onLoadedComment.user_details.profile_pic} data-user-popover="1" alt="" data-target="webuiPopover12" />
                        </div>
                    </div>
                    <div className="media-content">
                        <a href="#">{this.props.onLoadedComment.user_details.name}</a>
                        <span className="time">28 minutes ago</span>
                        <p ref={this.commentText}>{this.props.onLoadedComment.text}</p>
                        <div className="controls">
                            <div className="like-count">
                                <svg ref={this.commentLiked} data-liked={this.props.onLoadedComment.liked} data-id={this.props.onLoadedComment._id}  data-postid={this.props.onLoadedComment.post_id} onClick={this.upvoteComment} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={ this.props.onLoadedComment.liked > 0 ? "feather feather-thumbs-up liked-comment": "feather feather-thumbs-up"}><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                <span ref={this.commentCount} className={this.props.onLoadedComment.liked > 0 ? "liked-comment": ""}>{this.props.onLoadedComment.points}</span>
                            </div>
                            {this.props.onLoadedComment.current_user===true
                             && 
                             <div className="reply">
                                <a href="#" data-postid={this.props.onLoadedComment.post_id} data-commentid={this.props.onLoadedComment._id} onClick={this.deleteComment}>Delete</a>
                             </div>
                            }
                        </div>
                    </div>
                </div>
         )
     }
}

export default connect(state=>state, actions)(Comment);