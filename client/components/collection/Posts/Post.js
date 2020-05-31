import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'
import InfiniteScroll from 'react-infinite-scroller';
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

class Post extends Component{
    postImageContainer = React.createRef();
    counter = 0;
    defaultLimit = 3;
    defaultSkip = 0;
    totalPostsCount = 0;
    state = {
        tracks: [],
        hasMoreItems: true,
        nextHref: null,
        offset : 0,
        loadCounter: 0
    };
    componentDidMount(){
        console.log(this.props);
        this.setState({
            loadCounter: 1
        });
    }

    loadItems(){
        console.log(this.props.onArticle);
        this.counter = this.counter + this.defaultSkip;
        this.props.listPosts({
            limit: this.defaultLimit,
            offset : this.counter,
            tag : this.props.onTags,
            section : this.props.onSection, 
            article : this.props.onArticle,
            filters: {
                account:  this.props.onRefreshPosts ? 1: 0,
                value:  this.props.onRefreshPosts ? this.props.onRefreshPosts : null
            }
        }, (err, result)=>{
            this.defaultSkip = 3;   
            const tracks = this.state.tracks;
            if(this.totalPostsCount>0 && this.props.listOfPosts.count>this.totalPostsCount){
               document.getElementById('refresh-posts').classList.remove('d-none');
            }
            this.totalPostsCount = this.props.listOfPosts.count;
            const hasMoreItems = this.props.listOfPosts.data.length==0? false: true;
            this.props.listOfPosts.data.map((track) => {
                tracks.push(track);
            });
            this.setState({
                    tracks: tracks,
                    hasMoreItems,
                    loadCounter: 0
            });
        })

    }
    
    shouldComponentUpdate(nextProps, nextState){
        return nextState.loadCounter>0 ? false: true;
    }

    getTitleText = (title)=>{
        const txt = document.createElement("textarea");
        txt.innerHTML = title;
        return txt.value;
    }

    render(){
        const loader = (
            <div className="narrow-top has-text-centered">
              <a href="#" className="load-more-button loading border-grey">Load More</a>
           </div>
        );
        let items = [];
        this.state.tracks.map((result, i) => {
            items.push(
                <div key={result._id} className="card is-post br-0 border-0 mb-1rem">
                    <div className="content-wrap is-post">
                        {/* HEADING */}
                        <PostHeader onPost={result}/>
                        {/* BODY */}
                        <div className="card-body">
                            <div className="post-text">
                                <p>
                                    <a onClick={(e)=>e.preventDefault()}><h1 className="post-heading">{this.getTitleText(result.title)}</h1></a> 
                                </p>
                            </div>
                            <div ref={this.postImageContainer} className="post-image post-loads">
                                <a onClick={(e)=>e.preventDefault()} data-fancybox="post1" data-lightbox-type="comments">
                                    <img src={result.url} data-demo-src={result.url} alt="" onLoad={this.onPostImageLoad}/>
                                </a>
                            </div>
                        </div>
                        {/* FOOTER */}
                        <PostFooter onPost={result}/>
                    </div>
                </div>
            );
            
        });
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}>
                {items}
            </InfiniteScroll>
        );
    }
}

export default connect(state=>state, actions)(Post);