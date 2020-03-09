import React, {Component} from 'react'
import Tabs from './Tabs'
import Post from '../Posts/Post'


class Posts extends Component{
    componentDidMount(){
        const {type} = this.props.match.params;
        this.setState({type});
        console.log(type);
    }
    state = {
        type: null
    }
    render(){
        return(
            <div className="view-wrapper position-r">
                <Tabs onAccountPostType={(type)=>this.setState({type})}/>
                <div>
                    <div id="all-friends"></div>
                    <div id="starred-friends"></div>
                    <div id="new-friends"></div>
                </div>
                <div className="container">
                     <div className="view-wrap true-dom">
                         <div className="columns">
                              <div className="column is-6 pr-0 pl-0 mt-40">
                                  {/* POST */}
                                     <Post onRefreshPosts={this.props.match.params.type}/>
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