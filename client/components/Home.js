import React, {PureComponent, Fragment} from 'react';

import Header from './collection/Partials/Header';
import MobileHeader from './collection/Partials/MobileHeader';
import LoginModel from './collection/Models/Accounts/Login'
import Upload from './collection/Models/Upload/'
import Posts from './collection/Posts/'
import CommentsModel from './collection/Models/Comments'
import Leftsidebar from './collection/Partials/Leftsidebar';


class Home extends PureComponent{
      render(){
      	 return(
                  <Fragment>
                        {/* LEFT SIDEBAR */}
                        <Leftsidebar/>
                        
                        <Header/>
                        <div>
                              <MobileHeader/>
                              <Posts/>
                              <LoginModel/>
                              <Upload/>
                              <CommentsModel/>
                        </div>
                  </Fragment>
      	 )
      }
}

export default Home;

