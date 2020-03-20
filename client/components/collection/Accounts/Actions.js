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
                        <div className="info-row">
                            <div>
                                <span>Studied at</span>
                                <a className="is-inverted">Georgetown University</a>
                            </div>
                            <i className="mdi mdi-school"></i>
                        </div>
                        <div className="info-row">
                            <div>
                                <span>Married to</span>
                                <a className="is-inverted">Dan Walker</a>
                            </div>
                            <i className="mdi mdi-heart"></i>
                        </div>
                        <div className="info-row">
                            <div>
                                <span>From</span>
                                <a className="is-inverted">Melbourne, AU</a>
                            </div>
                            <i className="mdi mdi-earth"></i>
                        </div>
                        <div className="info-row">
                            <div>
                                <span>Lives in</span>
                                <a className="is-inverted">Los Angeles, CA</a>
                            </div>
                            <i className="mdi mdi-map-marker"></i>
                        </div>
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