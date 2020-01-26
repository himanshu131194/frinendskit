import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../../actions'

import Loader from './Loader'

class Section extends Component{
    state = {
        loading : 0
    }

    sectionsList = {};
    
    componentDidMount(){
        this.props.listSections();
    }

    selectedSection = (e)=>{
          const id = e.target.id;
          this.sectionsList[id]=id;

          if(e.target.checked===false)
             delete this.sectionsList[id]
       
          const sections = Object.keys(this.sectionsList);
          this.props.onSectionComplete(sections);

          console.log('this.props.onSendComplete')
          console.log(this.props.onSendComplete)
    }

    onSubmitPost = ()=>{
        this.props.uploadAll(this.props.onSendComplete, (err, data)=>{
            console.log(err)
            console.log(data)
       })
    }

    render(){
        return(
                <Fragment>
                {this.state.loading===1 && <Loader/> }

                    {this.props.listOfSections.length>0
                     ?  
                     <div className="card-body position-r model-pd2">
                        <div className="section-list">
                            <div className="list-body uppercase">
                                    {this.props.listOfSections.map((section)=>{
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
                                                            <input type="checkbox" id={section._id} name="selected_section" onClick={this.selectedSection} />
                                                            <label htmlFor={section._id}></label>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </label>
                                        )
                                    })}
                            </div>
                          </div>

                          <div className="text-center">
                              <button className="button is-solid accent-button raised wd-160px button-big uppercase" onClick={this.onSubmitPost}>publish</button>
                          </div>

                     </div>
                     : <Loader/> }
                </Fragment>
        )
    }
}

export default connect(state=>state, actions)(Section);



