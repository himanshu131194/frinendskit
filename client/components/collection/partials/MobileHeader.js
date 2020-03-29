import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import CommonClass from '../CommonClass';
import AccountDropdown from './AccountDropdown'


class MobileHeader extends CommonClass(Component){
      state = {
          loading : 0
      }
      componentDidMount(){
          this.props.authUsers();
      }
      render(){
      	return(
          <Fragment>
                    <nav className="navbar mobile-navbar is-hidden-desktop" aria-label="main navigation">
                        {/* Brand */} 
                        <div className="d-flex space-bw aln-cntr">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">
                                <img src="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/images/logo/logo.png" alt="" />
                            </a>
                        </div>
                        
                        {/* Navbar mobile menu */}
                        <div className="d-flex aln-cntr">
                           {this.props.user
                            ?
                            <Fragment> 
                              {this.props.user && this.props.user.auth===true
                              ?
                               <Fragment>
                                    <div className="navbar-item">
                                            <button type="button" className="button is-solid accent-button next-modal raised modal-trigger" data-modal="upload-modal" onClick={this.openModal}>
                                                <i class="mdi mdi-plus"></i> UPLOAD NEW
                                            </button>
                                    </div>
                                    <a href="/account" id="account-dropdown" className="navbar-item is-account drop-trigger has-caret">
                                            <div className="user-image">
                                                <img src={this.props.user.data.profile_pic} data-demo-src={this.props.user.data.profile_pic} alt="" />
                                            </div>
                                    </a>
                               </Fragment>
                              : 
                              <Fragment>
                                    <div className="navbar-item">
										<button type="button" className="button is-solid accent-button next-modal raised modal-trigger" data-modal="login-modal" onClick={this.openModal}>LOGIN</button>
									</div>
                              </Fragment>
                              } 
                            </Fragment>
                            :
                             <div className="navbar-item">
                               <div className="spinner-grow"></div>
                             </div>
                           }
                        </div>
                        </div>
                    </nav>
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(MobileHeader);


