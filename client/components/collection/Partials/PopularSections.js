import React, {Component} from 'react';
import CommonClass from '../CommonClass';


class PopularSections extends CommonClass(Component){
    render(){
           return(
            <div className="card no-border">
            <div className="card-heading popular-sections-list-header is-bordered">
                <h4 className="uppercase">popular</h4>
                <div className="dropdown is-spaced is-right dropdown-trigger">
                    <div>
                        <div className="button" onClick={this.toggleLeftSidebar}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body no-padding slideout-scroll has-slimscroll">
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557283922.5922_urumA2_100x100.jpg" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557283922.5922_urumA2_100x100.jpg" data-user-popover="9" alt="" data-target="webuiPopover66" />
                    <div className="page-meta">
                        <span>Nelly Schwartz</span>
                        {/* <span>Melbourne</span> */}
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557376304.186_U5U7u5_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557376304.186_U5U7u5_100x100wp.webp" data-user-popover="10" alt="" />
                    <div className="page-meta">
                        <span>Lana Henrikssen</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557391851.3248_Za4UdA_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557391851.3248_Za4UdA_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557310356.2625_y8EVa2_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557310356.2625_y8EVa2_100x100wp.webp" data-user-popover="12" alt="" />
                    <div className="page-meta">
                        <span>Mike Lasalle</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557217995.2799_bYQyJU_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557217995.2799_bYQyJU_100x100wp.webp" data-user-popover="13" alt="" />
                    <div className="page-meta">
                        <span>Rolf Krupp</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>

                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557311278.4297_UNEHy6_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557311278.4297_UNEHy6_100x100wp.webp" data-user-popover="12" alt="" />
                    <div className="page-meta">
                        <span>Mike Lasalle</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>

                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557399125.5971_HYGaTE_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557399125.5971_HYGaTE_100x100wp.webp" data-user-popover="12" alt="" />
                    <div className="page-meta">
                        <span>Mike Lasalle</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>

                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216678.2404_U2EHEM_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216678.2404_U2EHEM_100x100wp.webp" data-user-popover="12" alt="" />
                    <div className="page-meta">
                        <span>Mike Lasalle</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286928.6604_uTYgug_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286928.6604_uTYgug_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557283958.4323_AXE2aJ_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557283958.4323_AXE2aJ_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>                
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286922.3692_aWySaZ_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286922.3692_aWySaZ_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>                
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216688.9396_YduXUP_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216688.9396_YduXUP_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>                
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>                
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216707.0007_ESESyM_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216707.0007_ESESyM_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>               
                 <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557297099.4728_VeSAvU_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557297099.4728_VeSAvU_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>                
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286889.2504_mEVy2A_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286889.2504_mEVy2A_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>                
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557281608.0144_yjEDu7_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557281608.0144_yjEDu7_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>                
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291282.8015_egYQAB_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291282.8015_egYQAB_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>                
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557283964.0386_avUmy5_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557283964.0386_avUmy5_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>                
                <div className="add-friend-block transition-block">
                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557310702.1267_UgysAp_100x100wp.webp" data-demo-src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557310702.1267_UgysAp_100x100wp.webp" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>                
                <div className="add-friend-block transition-block">
                    <img src="https://friendkit.cssninja.io/assets/img/avatars/gaelle.jpeg" data-demo-src="https://friendkit.cssninja.io/assets/img/avatars/gaelle.jpeg" data-user-popover="11" alt="" />
                    <div className="page-meta">
                        <span>Gaelle Morris</span>
                    </div>
                    <div className="add-friend add-transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                </div>                
            </div>
        </div>
           )
    }
}


export default PopularSections;