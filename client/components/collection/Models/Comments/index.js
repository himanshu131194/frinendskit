import React, {Component} from "react";
import Comment from './Comment';
import CommentContent from './Content'
import Loader from '../Upload/Loader'

import {connect} from 'react-redux';
import * as actions from '../../../actions'

class CommentsModel extends Component{
        state = {
            loading : 0
        }
        loadListOfComments = (result)=>{
            return result.map((res)=><Comment key ={res._id} onLoadedComment={res}/>)
        }
        render(){
            return(
                <div id="comment-modal" className="modal share-modal is-xsmall has-light-bg">
                    <div className="modal-background"></div>
                    <div className="modal-content comment-content">
                        <div id="feed-post-1" class="card is-post br-0">
                            <div className="card-heading">
                                {this.props.listOfComments && this.props.listOfComments.length>0
                                ?
                                  <h4>Comments<small>({this.props.listOfComments.length})</small></h4>
                                :
                                  <h4>No comment to show</h4>
                                }
                                <div className="close-wrap">
                                    <span className="close-modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </span>
                                </div>
                            </div>
                            <div class="comments-wrap position-r">
                               {this.state.loading===1 && <Loader/> }
                               {this.props.listOfComments 
                                ? this.props.listOfComments.length>0
                                  &&
                                   <div class="comments-body has-slimscroll">
                                      {this.loadListOfComments(this.props.listOfComments)}
                                    </div>
                                : <Loader/>
                               }
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



export default connect(state=>state, actions)(CommentsModel);