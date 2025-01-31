import React, {Component} from 'react'
import Post from './Post'
import TagslistScroll from '../Partials/TagslistScroll'


class Posts extends Component{
    tag = null;
    componentDidMount(){
       const {tag} = this.props.match.params;
       this.tag = tag;
    }
    render(){
        return(
            <div className="view-wrapper position-r">
             
                <div className="container">
                    <div className="columns mt-0 mb-0">
                            <TagslistScroll />
                    </div>
                     <div className="view-wrap true-dom">
                       
                        <div className="columns">
                            <div className="column is-6 pr-0 pl-0">
                                {/* POST */}
                                <Post onTags={this.tag}/>
                                {/* END POST */}
                            </div>
                        </div>
                     </div>

                 </div>
            </div>
        )
    }
}

export default Posts;