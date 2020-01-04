import React, {Component, Fragment} from 'react'

class MobileHeader extends Component{
      render(){
      	return(
          <Fragment>
                    <nav className="navbar mobile-navbar is-hidden-desktop" aria-label="main navigation">
                        {/* Brand */} 
                        <div className="d-flex space-bw">
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

                            <div className="navbar-item is-icon drop-trigger">
                                <a className="icon-link" href="javascript:void(0);">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                    </svg>
                                    <span className="indicator"></span>
                                </a>
                            </div>
                        </div>
                        {/* Navbar mobile menu */}
                        <div className="d-flex aln-cntr">
                            <div className="navbar-item">
                                <button type="button" className="button is-solid accent-button next-modal raised modal-trigger" data-modal="share-modal">LOGIN</button>
                           </div>
                        </div>

                        </div>
                    </nav>
          </Fragment>
        )
      }
}

export default MobileHeader;


