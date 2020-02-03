import React from "react";
import Comment from './Comment';

export default ()=>{
    return(
<div id="comment-modal" className="modal share-modal is-xsmall has-light-bg">
<div className="modal-background"></div>
<div className="modal-content">
<div id="feed-post-1" class="card is-post br-0">
          <div className="card-heading">
                <h4>Comments<small>(8)</small></h4>
                <div className="close-wrap">
                    <span className="close-modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </span>
                </div>
            </div>
    <div class="comments-wrap">
       
        <div class="comments-body has-slimscroll">
            <div class="media is-comment m-0">
                <div class="media-left comment-media-left">
                    <div class="image">
                        <img src="https://randomuser.me/api/portraits/men/68.jpg" data-demo-src="https://randomuser.me/api/portraits/men/68.jpg" data-user-popover="1" alt="" data-target="webuiPopover12" />
                    </div>
                </div>
                <div class="media-content">
                    <a href="#">Dan Walker</a>
                    <span class="time">28 minutes ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
                    <div class="controls">
                        <div class="like-count">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
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
                                      
                                      
                                      
                                      
                        <div class="media is-comment m-0">
                                            <div class="media-left comment-media-left">
                                                <div class="image">
                                                    <img src="https://randomuser.me/api/portraits/men/17.jpg" data-demo-src="https://randomuser.me/api/portraits/men/17.jpg" data-user-popover="13" alt=""/>
                                                </div>
                                            </div>
                                            <div class="media-content">
                                                <a href="#">Rolf Krupp</a>
                                                <span class="time">9 hours ago</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                                                    dolore magna aliqua. Exercitation ullamco laboris consequat.</p>
                                                <div class="controls">
                                                    <div class="like-count">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                                        <span>2</span>
                                                    </div>
                                                    <div class="reply">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="media is-comment m-0">
                                            <div class="media-left comment-media-left">
                                                <div class="image">
                                                    <img src="https://randomuser.me/api/portraits/women/35.jpg" data-demo-src="https://randomuser.me/api/portraits/women/35.jpg" data-user-popover="10" alt=""/>
                                                </div>
                                            </div>
                                            <div class="media-content">
                                                <a href="#">Lana Henrikssen</a>
                                                <span class="time">10 hours ago</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore
                                                    et dolore magna aliqua.</p>
                                                <div class="controls">
                                                    <div class="like-count">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                                        <span>5</span>
                                                    </div>
                                                    <div class="reply">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                        </div>



                                        <Comment/>
                                        <Comment/>
                                        <Comment/>
                                        <Comment/>
                                        <Comment/>
                                        <Comment/>
                                        <Comment/>
                                        <Comment/>
                                        <Comment/>
                                        <Comment/>
                                        <Comment/>
                                        <Comment/>

                            
                                    </div>
                            
                                    <div class="card-footer">
                                        <div class="media post-comment">
                                            <div class="media-content">
                                                <div class="field">
                                                    <p class="control">
                                                        <textarea class="textarea comment-textarea" rows="5" placeholder="Write a comment..."></textarea>
                                                    </p>
                                                </div>
                                                <div class="actions">
                                                    <div class="action is-auto">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                                                    </div>
                                                    <div class="action is-upload">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                                        <input type="file"/>
                                                    </div>
                                                    <a class="button is-solid primary-button raised">Post Comment</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

</div>
</div>



    )
}




