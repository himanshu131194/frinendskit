import React, {Component} from 'react';

export default ()=>{
    return(
        <div className="compose">
            <div className="compose-form post-title-box">
                <img src="https://friendkit.cssninja.io/assets/images/avatars/jenna.png" alt=""/>
                <div className="control post-title">
                    <textarea id="publish" className="textarea" rows="3" placeholder="Write for your post title..."></textarea>
                </div>
            </div>
        </div>
    )
}