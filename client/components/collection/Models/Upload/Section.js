import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import * as actions from '../../../actions'
import CommonClass from '../../CommonClass';
import Loader from './Loader'

class Section extends CommonClass(Component){
    state = {
        loading : 0
    }
    postPublish = React.createRef();
    sectionsList = {};
    
    componentDidMount(){
        this.props.listSections();
    }

    selectedSection = (e)=>{
          const id = e.target.id;
          this.sectionsList[id]=e.target;
          const sectionsList = this.sectionsList;
          
          for(let x in sectionsList){
              if(x!==id){
                this.sectionsList[x].checked = false;
              }
          }

          const selected =  e.target.checked ? id : null; 
          selected ? this.postPublish.current.classList.remove('is-disabled') : this.postPublish.current.classList.add('is-disabled')
          this.props.onSectionComplete(selected);
    }

    onSubmitPost = ()=>{
        this.setState({loading: 1}, ()=>{
            this.props.uploadAll(this.props.onSendComplete, (err, data)=>{
                if(!err){
                    setTimeout(()=>{
                        //this.setState({loading : 0});
                        //this.props.onCloseModel();
                        window.location = "/";
                    }, 1000)
                }
           })
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
                              <button ref={this.postPublish} className="button is-solid accent-button raised wd-160px button-big uppercase is-disabled" onClick={this.onSubmitPost}>
                                 publish
                              </button>
                          </div>

                     </div>
                     : <Loader/> }
                </Fragment>
        )
    }
}

export default connect(state=>state, actions)(Section);



