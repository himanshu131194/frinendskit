import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import PostTitle from './PostTitle';


class LoginModel extends Component{
    state = {
        upload : 0
    }
    componentDidMount(){
         
    }
    render(){
        return(
            <div id="upload-modal" className="modal share-modal is-xsmall has-light-bg">
                <div className="modal-background"></div>
                <div className="modal-content">

                        <div className="card">
                            <div className="card-heading">
                                <h3 className="uppercase">Create an account</h3>
                                <div className="close-wrap">
                                    <span className="close-modal">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </span>
                                </div>
                            </div>
                            <div className="card-body model-pd-16">
                                    {
                                       this.state.upload==0
                                       ?<Fragment>
                                            <PostTitle/>
                                        </Fragment>
                                       :                                    
                                        <div className="login-wrapper">
                                            <div className="form-wrapper">
                                                        <div className="login-form">

                                                        <div className="field button-wrap">
                                                        <div className="control uppercase">
                                                            <button className="button is-solid accent-button raised is-fullwidth uppercase">Choose file to upload</button>
                                                        </div>
                                                        </div>
                                                        
                                                        <div className="field">
                                                            <h3 className="uppercase text-center">OR</h3>
                                                        </div>

                                                        <div className="field">
                                                            <div className="control">
                                                                <input className="input pl-0 text-center" type="text" placeholder="paste url for picture/video" />
                                                            </div>
                                                        </div>

                                                        </div>
                                            </div>
                                        </div>
                                    }
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




