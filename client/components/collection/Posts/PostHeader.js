import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions'


class PostHeader extends Component{
      render(){
          return(
            <div className="card-heading">
                <div className="user-block">
                    <div className="image">
                        <img src={this.props.onPost.section_details[0].url} data-demo-src={this.props.onPost.section_details[0].url} alt="" />
                    </div>
                    <div className="user-info">
                        <a href="#" className="uppercase">funny</a>
                        <span className="time">July 26 2018, 01:03pm</span>
                    </div>
                </div>
                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                    <div>
                        <div className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                        </div>
                    </div>

                </div>
            </div> 
          )
      }
}

export default connect(state=>state, actions)(PostHeader);
