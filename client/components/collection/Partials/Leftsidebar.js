import React , {Component, Fragment} from 'react';
import CommonClass from '../CommonClass';
import PopularSections from './PopularSections'


class Leftsidebar extends CommonClass(Component){
    render(){
        return(
               <Fragment>
                   <div  className="">
                    <div id="bg-cover"  className="bg-cover d-none" onClick={this.toggleLeftSidebar}></div>
                    <div id="sections_left_sidebar" className="inbox-left-sidebar slideout-scroll has-slimscroll">
                           <PopularSections/>
                    </div>
                   </div>
                </Fragment>
        )
    }
}

export default Leftsidebar;