import React, {Component} from 'react'
import Post from './Post'


class Posts extends Component{
    componentDidMount(){

    }
    render(){
        return(
            <div className="view-wrapper position-r">
             
                <div className="container">

                     <div className="view-wrap true-dom">
                         <div className="columns">
                              <div className="column is-6 pr-0 pl-0">
                                  {/* POST */}
                                   <Post/>
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