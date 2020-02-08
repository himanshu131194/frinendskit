import React, { Component } from "react";

class Comment extends Component{
    upvoteComment = (e)=>{
        const id = e.currentTarget.dataset.id;
        console.log(id);
    }
     render(){
         return(
                 <div class="media is-comment m-0">
                    <div class="media-left comment-media-left">
                        <div class="image">
                            <img src={this.props.onLoadedComment.user_details[0].profile_pic} data-demo-src={this.props.onLoadedComment.user_details[0].profile_pic} data-user-popover="1" alt="" data-target="webuiPopover12" />
                        </div>
                    </div>
                    <div class="media-content">
                        <a href="#">{this.props.onLoadedComment.user_details[0].name}</a>
                        <span class="time">28 minutes ago</span>
                        <p>{this.props.onLoadedComment.text}</p>
                        <div class="controls">
                            <div class="like-count">
                                <svg data-id={this.props.onLoadedComment._id}  onClick={this.upvoteComment} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                <span>4</span>
                            </div>
                            <div class="reply">
                                <a href="#">Reply</a>
                            </div>
                            <div class="edit">
                                <a href="#">Edit</a>
                            </div>
                        </div>
                    </div>
                </div>
         )
     }
}

export default Comment;