import React, {PureComponent, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'

import AccountDropdown from './AccountDropdown'

class Header extends PureComponent{
      state = {
		  loading : 0
	  }
	  componentDidMount(){
		 this.props.authUsers();
	  }
      render(){
      	return(
          <Fragment>
					<div id="main-navbar" className="navbar is-inline-flex is-transparent no-shadow is-hidden-mobile">
						<div className="container">
							<div className="navbar-brand">
								<a href="/" className="navbar-item">
									<img src="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/images/logo/friendkit.svg" width="112" height="28" alt="" />
								</a>
							</div>
							<div className="navbar-menu">
								<div className="navbar-start">

									{/* <div className="navbar-item is-icon drop-trigger">
										<a className="icon-link is-primary is-friends" href="javascript:void(0);">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
												<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
											</svg>
											<span className="indicator"></span>
										</a>
									</div>



									<div className="navbar-item is-icon open-chat">
										<a className="icon-link is-primary" href="javascript:void(0);">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
											<span className="indicator"></span>
										</a>
									</div> */}
								</div>

								<div className="navbar-end">
									
									{this.props.user 
									 ? <Fragment>
                                            {this.props.user.auth===true
											 ?
											 <Fragment>
													<div className="navbar-item is-icon drop-trigger">
															<a className="icon-link" href="javascript:void(0);">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
																	<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
																	<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
																</svg>
																<span className="indicator"></span>
															</a>
													</div>
													<div className="navbar-item">
														<button type="button" className="button is-solid accent-button next-modal raised modal-trigger" data-modal="upload-modal">UPLOAD NEW</button>
													</div>
													<div id="account-dropdown" className="navbar-item is-account drop-trigger has-caret">
															<div className="user-image">
																<img src="https://friendkit.cssninja.io/assets/images/avatars/jenna.png" data-demo-src="https://friendkit.cssninja.io/assets/images/avatars/jenna.png" alt="" />
															</div>
															{/* <AccountDropdown/> */}
													</div>
											 </Fragment>
											 :
											 <Fragment>
												<div className="navbar-item">
													<button type="button" className="button is-solid accent-button next-modal raised modal-trigger" data-modal="login-modal">LOGIN</button>
												</div>
											 </Fragment>
											}
									   </Fragment>
									 :  
									  <div className="navbar-item">
									     <div className="spinner-grow"></div>
								      </div>
									}



								
                                    {/*
									<div className="navbar-item is-plus-menu">
										<a id="plus-menu" className="button action-button is-solid primary-button raised">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-plus">
												<line x1="12" y1="5" x2="12" y2="19"></line>
												<line x1="5" y1="12" x2="19" y2="12"></line>
											</svg>
										</a>
									</div> */}

								</div>
							</div>
						</div>
					</div> 
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(Header);





