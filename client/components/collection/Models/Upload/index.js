import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import * as actions from '../../../actions'
import Title from './Title';
import Uploads from './Uploads';
import Section from './Section';
import CommonClass from '../../CommonClass';

class PostModel extends CommonClass(Component){
    data64 = null;
    s3Upladed = null;
    dataToUplaod = null;
    closeUpload = React.createRef();
    state = {
        upload : 1,
        dataToUplaod : null
        //2 title
        //3 choose section
        //4 success upload
    }
    componentDidMount(){
         
    }

    onChangeUploadState(s3Upladed , data){
        this.s3Upladed = s3Upladed;
        this.data64 = data
        this.setState({upload: 2});     
    }


    onChangeTitleState = (postData)=>{
        this.dataToUplaod = postData;
        this.setState({upload: 3})
    }

    onSectionSelected = async (sections)=>{
         this.dataToUplaod.postSections = sections;
         await this.setState({
             dataToUplaod : this.dataToUplaod
         })
    }

    postUpload = (uploadStep)=>{
        switch(uploadStep) {
            case 2:
                return <Title onLoaddata64={this.data64} ons3Uploaded={this.s3Upladed} onTitleComplete={(data)=>this.onChangeTitleState(data)}/>
                break;
            case 3:
                return <Section onCloseModel={this.closeModel} onSectionComplete={(sections)=>this.onSectionSelected(sections)}  onSendComplete={this.state.dataToUplaod}/>
                break;
            default:
                return <Uploads onUploadComplete={(result, key)=>this.onChangeUploadState(result, key)}/>
                break;
        }
    }

    closeThisModal = (e)=>{
       this.setState({ upload : 1});
       this.closeModal(e);
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

                                <div className="close-wrap" data-modal="upload-modal" onClick={this.closeThisModal}>
                                    <span ref={this.closeUpload} className="close-modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </span>
                                </div>
                            </div>

                            <div className="position-r">
                                {
                                    this.postUpload(this.state.upload)
                                }
                            </div>
                        </div>
                </div>
            </div>
)
    }
}

export default connect(state=>state, actions)(PostModel);




