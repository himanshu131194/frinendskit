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
        console.log(this.props.user);
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
    render(){
        return(
               <Fragment>
                   {this.props.listOfPosts && this.props.listOfPosts.map((result)=>{
                           return(
                            <div key={result._id} className="card is-post br-0 border-0">
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