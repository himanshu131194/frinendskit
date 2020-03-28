import React, {Component, Fragment} from 'react'
import CommonClass from '../../CommonClass';


class LoginModel extends CommonClass(Component){
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
                                    <span className="close-modal" data-modal='login-modal' onClick={this.closeModal}>
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
                                           </div>
                                        </div>
                                        </div>
                            </div>
                            </div>
                            </div>
                            <div className="card-footer flex-end">
                                <div className="button-wrap">
                                    <button type="button" className="button is-solid dark-grey-button close-modal uppercase" data-modal='login-modal' onClick={this.closeModal}>Cancel</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
)
    }
}

export default LoginModel;







