import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import * as actions from '../../../actions'

import Loader from '../Upload/Loader'

class Reportpost extends Component{
    reportText = React.createRef()
    reportReason = React.createRef()

    state = {
        loading : 0
    }
    postTitle = React.createRef();


    onReport = (e)=>{
        e.preventDefault();
        this.setState({loading: 1});
        const post_id = this.props.selectedPost,
              report_reason = this.reportReason.current.value,
              report_text = this.reportText.current.value;
        this.props.reportPost({post_id, report_reason, report_text} , (err, result)=>{
                if(!err){
                    setTimeout(()=>{
                        this.setState({loading: 0});
                        this.props.onCloseModel();
                    }, 2000)
                }
        })
        // post_id, report_reason, report_text
    }

    render(){
        return(
            <Fragment>
            {this.state.loading===1 && <Loader/> }
            <div className="card-body model-pd">
                <img src="https://friendkit.cssninja.io/assets/img/icons/chat/bubbles.svg" alt=""/>
                <div className="field is-autocomplete">
                            <div class="control select width-100pr">
                            <select ref={this.reportReason} className="no-shadow width-100pr" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            </div>
                </div>
                <div className="field is-autocomplete">
                            <div class="control">
                                <input ref={this.reportText} type="text" class="input" placeholder="Tell us what is wrong in this post"/>
                            </div>
                </div>
                <div className="action has-text-centered uppercase">
                    <button type="button" className="button is-solid accent-button raised wd-160px button-big uppercase" onClick={this.onReport}>report post</button>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default connect(state=>state, actions)(Reportpost);


