import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'

class Tags extends Component{
    componentDidMount(){
        this.props.listTags();
    }
    render(){
        return(
            <div className="tabs question-tabs is-centered">
            <ul className="">
                {this.props.listOfTags.length>0 &&
                 this.props.listOfTags.map((tag)=>{
                    let tagName = tag.name.toLowerCase();
                    return(
                        <li><a href={"/tags/"+tagName} data-id={tag._id} className="button is-rounded" >{tag.name}</a></li>
                    )
                }) }
            </ul>
        </div>
        )
    }
}



export default connect(state=>state, actions)(Tags);
