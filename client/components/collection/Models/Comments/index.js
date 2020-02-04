import React, {Component} from "react";
import Comment from './Comment';
import CommentContent from './Content'
import Loader from '../Upload/Loader'


class CommentsModel extends Component{
        state = {
            loading : 0
        }
        render(){
            return(
                <div id="comment-modal" className="modal share-modal is-xsmall has-light-bg">
                    <div className="modal-background"></div>
                    <div className="modal-content comment-content">
                        <div id="feed-post-1" class="card is-post br-0">
                            <div className="card-heading">
                                <h4>Comments<small>(8)</small></h4>
                                <div className="close-wrap">
                                    <span className="close-modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </span>
                                </div>
                            </div>
                            <div class="comments-wrap position-r">
                               { this.state.loading===1 && <Loader/> }
                                <div class="comments-body has-slimscroll">
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                    
                                </div>
                                <div class="card-footer">
                                    <CommentContent onPostComment={(status)=>this.setState({loading: status})}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}



export default CommentsModel;