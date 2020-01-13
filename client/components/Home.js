import React, {Component, Fragment} from 'react';

import Header from './collection/partials/Header';
import MobileHeader from './collection/partials/MobileHeader';
import LoginModel from './collection/Models/Login'
import Uploads from './collection/Models/Uploads'


class Home extends Component{
      render(){
      	 return(
           <Fragment>
			   <Header/>
            <MobileHeader/>

            <LoginModel/>
            <Uploads/>
            
                     <div className="post-container">
                         <section className="posts">
                           <div className="posts-inner">
                           </div>
                        </section>
                     </div>
           </Fragment>
      	 )
      }
}

export default Home;