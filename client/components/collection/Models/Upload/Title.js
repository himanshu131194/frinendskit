import React, {Component, Fragment} from 'react'
import Loader from './Loader';


class Title extends Component{
    state = {
        loading : 0
    }
    postTitle = React.createRef();

    onAddTitle = (e)=>{
        e.preventDefault();

        const postTitle = this.postTitle.current.value;
        const s3UploadedObj = this.props.ons3Uploaded;
              s3UploadedObj.postTitle = postTitle;

        this.props.onTitleComplete(s3UploadedObj);
    }

    render(){
        return(
            <Fragment>
            { this.state.loading===1 && <Loader/> }
            <div className="card-body position-r">
                <div className="control">
                    <textarea ref={this.postTitle} className="textarea comment-textarea" rows="1" placeholder="Say something about this ..."></textarea>
                </div>

                <div className="shared-publication position-r">
                    <div className="title-next-box">
                    <button className="button is-solid accent-button raised wd-160px button-big uppercase" onClick={this.onAddTitle}>Next</button>
                    </div>
                    <div className="featured-image">
                        {this.props.onLoaddata64 && <img id="share-modal-image" src={this.props.onLoaddata64} alt=""/>}
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Title;




