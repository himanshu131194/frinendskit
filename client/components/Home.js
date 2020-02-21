import React, {PureComponent, Fragment} from 'react';

import Header from './collection/Partials/Header';
import MobileHeader from './collection/Partials/MobileHeader';
import LoginModel from './collection/Models/Accounts/Login'
import Upload from './collection/Models/Upload/'

import Posts from './collection/Posts/'

import CommentsModel from './collection/Models/Comments'








class Home extends PureComponent{
      render(){
            console.log('home component');
      	 return(
             <Fragment>
		 <Header/>
             <MobileHeader/>
             <Posts/>
             <LoginModel/>
             <Upload/>
             <CommentsModel/>
           </Fragment>

      	 )
      }
}

export default Home;