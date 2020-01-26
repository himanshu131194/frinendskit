import React, {Component, Fragment} from 'react';

import Header from './collection/partials/Header';
import MobileHeader from './collection/partials/MobileHeader';
import LoginModel from './collection/Models/Login'
import Upload from './collection/Models/Upload/'

import Posts from './collection/Posts/'




class Home extends Component{
      render(){
      	 return(
           <Fragment>
			   <Header/>
            <MobileHeader/>


            <Posts/>
            

            <LoginModel/>
            <Upload/>
            
                    
           </Fragment>
      	 )
      }
}

export default Home;