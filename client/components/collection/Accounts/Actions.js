import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'



class Actions extends Component{
      render(){
          return(
            <div className="columns">
            <div id="profile-timeline-widgets" className="column is-4">
                <div className="basic-infos-wrapper">
                    <div className="card is-profile-info br-0">
                        <div class="info-row">
                            <div><span>Switch account</span></div>
                            <div>
                                <a href="/api/logout" class="button is-solid primary-button raised uppercase d-flex">logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          )
      }
}

export default connect(state=>state, actions)(Actions);