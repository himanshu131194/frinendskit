import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class LoginModel extends Component{
    componentDidMount(){
         
    }
    render(){
        return(
            <div id="login-modal" className="modal share-modal is-xsmall has-light-bg">
                <div className="modal-background"></div>
                <div className="modal-content">

                        <div className="card">
                            <div className="card-heading">
                                <h3 className="uppercase">become a member</h3>
                                <div className="close-wrap">
                                    <span className="close-modal">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </span>
                                </div>
                            </div>
                            <div className="card-body model-pd">
                            <div className="login-wrapper">
                            <div className="form-wrapper">
                                        <div className="login-form">
                                            <div className="field button-wrap">
                                           <div className="control uppercase">
                                              <a className="button is-solid primary-button raised is-fullwidth uppercase mb-15" href="/api/auth/google">Login with Google </a>
                                                <div className="field">
                                                  <h3 className="uppercase text-center">OR</h3>
                                                </div>
                                              <button className="button is-solid accent-button raised is-fullwidth uppercase">Login with Facebook</button>
                                           </div>
                                        </div>
                                            {/* <div className="field">
                                                <h3 className="uppercase text-center">OR</h3>
                                            </div>
                                            <div className="field">
                                                <div className="control">
                                                    <input className="input email-input" type="text" placeholder="jennadavis@gmail.com" />
                                                    <div className="input-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <div className="control">
                                                    <input className="input password-input" type="password" placeholder="●●●●●●●" />
                                                    <div className="input-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock">
                                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="field"> 
                                                <div className="control uppercase">
                                                    <a className="button loginbutton-wrapper is-fullwidth uppercase">Login</a>
                                                </div>
                                            </div>
        */}
                                        </div>
                            </div>
                            </div>
                            </div>
                            <div className="card-footer flex-end">
                                <div className="button-wrap">
                                    <button type="button" className="button is-solid dark-grey-button close-modal uppercase">Cancel</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
)
    }
}

export default LoginModel;







