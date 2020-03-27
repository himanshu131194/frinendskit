import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import * as actions from '../../../actions'
import Reportpost from './Reportpost'


class Main extends Component{
    postTitle = React.createRef();
    data64 = null;
    s3Upladed = null;
    dataToUplaod = null;
    closeUpload = React.createRef();
    
    state = {
        upload : 1,
        dataToUplaod : null
    }

    closeModel = (e)=>{
       this.setState({ upload : 1});
       this.closeUpload.current.click();
    }

    render(){
        return(
            <div id="report-modal" className="add-conversation-modal modal share-modal is-xsmall has-light-bg">
                <div className="modal-background"></div>
                <div className="modal-content">
                        <div className="card">
                            <div className="card-heading">
                                <h3 className="uppercase">Report post</h3>

                                <div className="close-wrap" onClick={this.closeModel}>
                                    <span ref={this.closeUpload} className="close-modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </span>
                                </div>
                            </div>
                            <div className="position-r">
                                <Reportpost onCloseModel={this.closeModel}/>
                            </div>
                             </div>
                </div>
            </div>
)
    }
}

export default connect(state=>state, actions)(Main);




