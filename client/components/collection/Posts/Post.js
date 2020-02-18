import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'

import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";


class Post extends Component{
    state = {

    };
    componentDidMount(){
        this.props.listPosts();
    }
    render(){
        return(
               <Fragment>
                   {this.props.listOfPosts && this.props.listOfPosts.map((result)=>{
                           return(
                            <div key={result._id} className="card is-post br-0 border-0 mb-1rem">
                                <div className="content-wrap">
                                    {/* HEADING */}
                                    <PostHeader onPost={result}/>
                                    {/* BODY */}
                                    <div className="card-body">
                                        <div className="post-text">
                                            <p>
                                                <a href="#">{result.title}</a> 
                                            </p>
                                        </div>
                                        <div className="post-image">
                                            <a data-fancybox="post1" data-lightbox-type="comments" data-thumb="https://friendkit.cssninja.io/assets/images/demo/unsplash/1.jpg" href="https://friendkit.cssninja.io/assets/images/demo/unsplash/1.jpg" data-demo-href="https://friendkit.cssninja.io/assets/images/demo/unsplash/1.jpg">
                                                <img src={result.url} data-demo-src={result.url} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* FOOTER */}
                                    <PostFooter onPost={result}/>
                                </div>
                            </div>
                    )
                 })}
                </Fragment>
        )
    }
}

export default connect(state=>state, actions)(Post);