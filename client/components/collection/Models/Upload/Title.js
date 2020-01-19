import React, {Component, Fragment} from 'react'
import Loader from './Loader';


class Title extends Component{

    state = {
        loading : 1
    }

    render(){
        return(
            <Fragment>
            { this.state.loading===1 && <Loader/> }
            <div className="card-body position-r">
                <div className="control">
                    <textarea className="textarea comment-textarea" rows="1" placeholder="Say something about this ..."></textarea>
                </div>

                <div className="shared-publication position-r">
                    <div className="title-next-box">
                    <button className="button is-solid accent-button raised wd-160px button-big uppercase">Next</button>
                    </div>
                    <div className="featured-image">
                        <img id="share-modal-image" src="http://getwallpapers.com/wallpaper/full/b/4/2/639378.jpg" alt=""/>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Title;




