import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'

import AccountDropdown from './AccountDropdown'


class MobileHeader extends Component{
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
                            <div className="">
                                <div className="navbar-burger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <a className="navbar-item" href="/">
                                <img src="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/images/logo/friendkit.svg" alt="" />
                            </a>
                            
                            {this.props.user && this.props.user.auth==true &&
                             <div className="navbar-item is-icon drop-trigger">
                                <a className="icon-link" href="javascript:void(0);">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                    </svg>
                                    <span className="indicator"></span>
                                </a>
                             </div>
                            }
                        </div>
                        
                        {/* Navbar mobile menu */}
                        {/* <div className="d-flex aln-cntr">
                           {this.props.user
                            ? */}
                            {/* <Fragment> */}
                              {this.props.user && this.props.user.auth===false
                              ?
                               <Fragment>
                                    <div className="navbar-item">
                                            <button type="button" className="button is-solid accent-button next-modal raised modal-trigger" data-modal="upload-modal">UPLOAD NEW</button>
                                            <button type="button" className="button is-solid accent-button next-modal raised modal-trigger" data-modal="share-modal">LOGIN</button>
                                    </div>
                                    <div id="account-dropdown" className="navbar-item is-account drop-trigger has-caret">
                                            <div className="user-image">
                                                <img src="https://friendkit.cssninja.io/assets/images/avatars/jenna.png" data-demo-src="https://friendkit.cssninja.io/assets/images/avatars/jenna.png" alt="" />
                                            </div>
                                            <AccountDropdown/>
                                    </div>
                               </Fragment>
                              : 
                              <Fragment>
                                   <div className="navbar-item">
                                   <button type="button" className="button is-solid accent-button next-modal raised modal-trigger" data-modal="upload-modal">UPLOAD NEW</button>
                                   </div>
                                   <div id="account-dropdown" className="navbar-item is-account drop-trigger has-caret">
                                            <div className="user-image">
                                                <img src="https://friendkit.cssninja.io/assets/images/avatars/jenna.png" data-demo-src="https://friendkit.cssninja.io/assets/images/avatars/jenna.png" alt="" />
                                            </div>
                                            <AccountDropdown/>
                                    </div>
                              </Fragment>
                              } 
                            {/* </Fragment>
                            :
                             <div className="navbar-item">
                               <div className="spinner-grow"></div>
                             </div>
                           }

                        </div> */}

                        </div>
                    </nav>
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(MobileHeader);


