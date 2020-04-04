import React, {Component} from 'react'
import Post from './Post'
import TagslistScroll from '../Partials/TagslistScroll'
import Leftsidebar from '../Partials/Leftsidebar';


class Posts extends Component{
    render(){
        const {tag, section} = this.props.match.params;
        return(
            <div className="view-wrapper position-r">
             
                <div className="container">
                    <div className="columns mt-0 mb-0">
                            <TagslistScroll />
                    </div>
                     <div className="view-wrap true-dom">
                        <div className="columns">
                           <div className="noin-mobile position-f column is-2 pr-0 pl-0">
                             <Leftsidebar/>
                           </div>
                            <div className="column is-8 pr-0 pl-0 ml-200">
                                <div className="post-size">
                                    {/* POST */}
                                    <Post onSection={section} onTags={tag}/>
                                    {/* END POST */}
                                </div>
                            </div>
                        </div>
                     </div>

                 </div>
            </div>
        )
    }
}

export default Posts;