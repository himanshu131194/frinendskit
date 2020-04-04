import React, {Component} from 'react';
import CommonClass from '../../CommonClass';


class PopularSections extends CommonClass(Component){
    render(){
           return(
            <div className="card no-border">
            <div className="card-heading popular-sections-list-header is-bordered">
                <h4 className="uppercase">popular <span className="noin-mobile">sections</span></h4>
                <div className="noin-desktop dropdown is-spaced is-right dropdown-trigger">
                    <div>
                        <div className="button" onClick={this.toggleLeftSidebar}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body no-padding">
                {this.props.onPopularSections.map((section)=>{
                    return (
                        <div className="add-friend-block transition-block" key={section._id}>
                            <img src={section.url} data-demo-src={section.url} data-user-popover="9" alt="" data-target="webuiPopover66" />
                            <a href={"/section/"+section._id} className="page-meta">
                                <span className="uppercase">{section.value}</span>
                            </a>
                            <div className="add-friend">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
           )
    }
}


export default PopularSections;