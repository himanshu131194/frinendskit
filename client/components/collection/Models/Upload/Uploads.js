import React, {Component, Fragment} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux';
import * as actions from '../../../actions'

// import Common from '../../CommonClass';
import Loader from './Loader';

class Uploads extends Component{

     uploadedFileObj = {};
     storageKey =  uuidv4();
     externalUrlInput = React.createRef();

     state = {
         loading : 0,
         storageKey : null
     }

    //  setLocalStorage(data64){
    //     const key = uuid();
    //     const stored = localStorage.setItem(key, data64); 
    //     return key;
    //  }
    
    onUploadContent = (e)=>{
        e.preventDefault();

        this.setState({loading: 1});
        let uploadedFile = e.dataTransfer ? e.dataTransfer.files[0]: e.target.files[0],
            mime = uploadedFile.type,
            ext = uploadedFile.name.split('.').pop();
        let reader = new FileReader;
            reader.onload =  (data64)=>{
                          this.props.uploadS3({url: null, mime, ext, data64: data64.target.result}, (err, res)=>{
                              if(!err){
                                    this.uploadedFileObj.postMime = mime;
                                    this.uploadedFileObj.postExt = ext;
                                    this.uploadedFileObj.postSlug = res.slug;
                                    this.uploadedFileObj.uploadedURL = res.url;
                                    this.props.onUploadComplete(this.uploadedFileObj, data64.target.result);
                              }

                            })
            }
          reader.readAsDataURL(uploadedFile);
    }

    validateUplaodURL = (url)=>{
        return (/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi).test(url);
    }

    onTypeImageURL = (e)=>{
        
        const contentURL = e.target.value.trim();
        if(contentURL.length>0 && this.validateUplaodURL(contentURL)){
            this.setState({loading: 1});
            this.props.uploadS3({url: contentURL, mime:null, ext: null, data64:null}, (err, res)=>{
                console.log(res);
                if(!err){
                      this.uploadedFileObj.postMime = res.mime;
                      this.uploadedFileObj.postExt = res.ext;
                      this.uploadedFileObj.postSlug = res.slug;
                      this.uploadedFileObj.uploadedURL = res.url;
                      this.props.onUploadComplete(this.uploadedFileObj, res.base64);
                }else{
                      this.externalUrlInput.current.parentNode.classList.add('has-error');
                      this.externalUrlInput.current.classList.add('text-error');
                }
                this.setState({loading: 0});
              })
             console.log(contentURL);
         }else{
            this.externalUrlInput.current.parentNode.classList.add('has-error');
            this.externalUrlInput.current.classList.add('text-error');
         }

    }

    clearInputURL = ()=>{
        this.externalUrlInput.current.value='';
        this.externalUrlInput.current.parentNode.classList.remove('has-error');
        this.externalUrlInput.current.classList.remove('text-error');
    }

    render(){
        return(
            <Fragment>
                {this.state.loading===1 && <Loader/>}
                <div className="card-body model-pd"> 
                        <div className="login-wrapper">
                        <div className="form-wrapper">
                                    <div className="login-form">

                                    <div className="field button-wrap">
                                        <div className="control uppercase">
                                            <div className="upload-btn-wrapper">
                                            <button className="button is-solid accent-button raised is-fullwidth uppercase"><i className="mdi mdi-plus"></i> add pictures/videos</button>
                                            <input type="file" id="choose_file" accept="image/*" name="myfile" onChange={this.onUploadContent} />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="field">
                                        <h3 className="uppercase text-center">OR</h3>
                                    </div>

                                    <div className="field">
                                        {/* <div className="control">
                                            <input className="input text-center" onInput={this.onTypeImageURL} type="text" placeholder="paste url for picture/video" />
                                        </div> */}
                                        <div className="control has-validation">
                                            <input type="text" ref={this.externalUrlInput} className="input text-center" onInput={this.onTypeImageURL} placeholder="paste url for picture/video"/>
                                            <div className="error-icon" onClick={this.clearInputURL}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </div>
                                         </div>
                                    </div>

                                    </div>
                        </div>
                        </div>
                </div>
             </Fragment>
            )
    }
}

export default connect(state=>state, actions)(Uploads);




