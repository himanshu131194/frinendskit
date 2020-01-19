import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import Title from './Title';
import Uploads from './Uploads';
import Section from './Section';



class LoginModel extends Component{
    state = {
        upload : 1
        //2 title
        //3 choose section
        //4 success upload
    }
    componentDidMount(){
         
    }

    postUpload(uploadStep){
        switch(uploadStep) {
            case 2:
                return <Title/>
                break;
            case 3:
                return <Section/>
                break;
            default:
                return <Uploads/>
                break;
        }
    }
    render(){
        return(
            <div id="upload-modal" className="modal share-modal is-xsmall has-light-bg">
                <div className="modal-background"></div>
                <div className="modal-content">

                        <div className="card">
                            <div className="card-heading">
                                {this.state.upload==1 && <h3 className="uppercase">upload image or video</h3>}
                                {this.state.upload==2 && <h3 className="uppercase">add title to your post</h3>}
                                {this.state.upload==3 && <h3 className="uppercase">choose section</h3>}
                                {this.state.upload==4 && <h3 className="uppercase">upload status</h3>}

                                <div className="close-wrap">
                                    <span className="close-modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </span>
                                </div>
                            </div>

                            <div className="position-r">
                                {
                                    this.postUpload(this.state.upload)
                                }
                            </div>

                            <div className="card-footer flex-end">
                                <div className="button-wrap">
                                    <button type="button" className="button is-solid dark-grey-button close-modal uppercase">Cancel</button>
                                    {this.state.upload===3 && <button type="button" class="button is-solid accent-button uppercase">submit</button>}
                                </div>
                            </div>
                        </div>
                </div>
            </div>
)
    }
}

export default LoginModel;




