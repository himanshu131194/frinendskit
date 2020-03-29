import React , {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'
import CommonClass from '../CommonClass';
import PopularSections from './PopularSections'


class Leftsidebar extends CommonClass(Component){
    componentDidMount(){
        this.props.listSections();
    }
    render(){
        console.log(this.props.listOfSections);
        return(
               <Fragment>
                   <div  className="">
                    <div id="bg-cover"  className="bg-cover d-none" onClick={this.toggleLeftSidebar}></div>
                    <div id="sections_left_sidebar" className="inbox-left-sidebar slideout-scroll has-slimscroll">
                           <PopularSections onPopularSections={this.props.listOfSections}/>
                    </div>
                   </div>
                </Fragment>
        )
    }
}

export default connect(state=>state, actions)(Leftsidebar);
