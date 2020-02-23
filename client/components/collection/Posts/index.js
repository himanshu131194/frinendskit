import React, {Component} from 'react'
import Post from './Post'

import Leftsidebar from '../Partials/Leftsidebar';

class Posts extends Component{
    render(){
        return(
            <div className="view-wrapper position-r">
                 
                 {/* LEFT SIDEBAR */}
                 <Leftsidebar/>

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