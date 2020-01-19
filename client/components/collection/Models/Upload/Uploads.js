import React, {Component, Fragment} from 'react'
import Loader from './Loader';

class Uploads extends Component{
     state = {
         loading : 1
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
                                        <button className="button is-solid accent-button raised is-fullwidth uppercase"><i class="mdi mdi-plus"></i> add pictures/videos</button>
                                        <input type="file" id="choose_file" name="myfile" onChange={this.draggableDrop} />
                                        </div>
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
                </div>
             </Fragment>
            )
    }
}

export default Uploads;




