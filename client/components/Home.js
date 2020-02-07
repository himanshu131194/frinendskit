import React, {Component, Fragment} from 'react';

import Header from './collection/partials/Header';
import MobileHeader from './collection/partials/MobileHeader';
import LoginModel from './collection/Models/Accounts/Login'
import Upload from './collection/Models/Upload/'

import Posts from './collection/Posts/'

import CommentsModel from './collection/Models/Comments'








class Home extends Component{
      render(){
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