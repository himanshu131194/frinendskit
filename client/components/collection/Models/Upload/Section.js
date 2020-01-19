import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../../actions'

import Loader from './Loader'

class Section extends Component{
    state = {
        loading : 1
    }
    componentDidMount(){
        this.props.listSections();
    }
    render(){
        return(
                <Fragment>
                {this.state.loading===1 && <Loader/> }
                    <div className="card-body position-r model-pd2">
                                <div className="section-list">
                                    <div className="list-body uppercase">

                                        {this.props.listOfSections.length>0
                                            ?
                                            this.props.listOfSections.map((section)=>{
                                                return (
                                                    <label htmlFor={section._id} key={section._id}>
                                                        <div className="section-block" key={section._id}>
                                                            {/* Name */}
                                                            <div className="d-flex aln-cntr">
                                                            <img className="section-avatar" src={section.url} alt=""/>
                                                                <div className="section-name">{section.value}</div>
                                                            </div>
                                                            {/* CHECKBOX */}
                                                            <div className="round-checkbox is-small">
                                                                <div>
                                                                    <input type="checkbox" id="checkbox-3" name="selected_sections" onClick={this.selectSection} id={section._id}/>
                                                                    <label htmlFor="checkbox-3"></label>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </label>
                                                )
                                            })
                                            :
                                            <div>Loading</div>
                                            }  
                                    </div>
                                </div>
                    </div>
                </Fragment>
        )
    }
}

export default connect(state=>state, actions)(Section);



