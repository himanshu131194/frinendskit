import React, {Component, Fragment} from 'react'

class Header extends Component{
      render(){
      	return(
          <Fragment>
            <footer className="site-footer">
                    <a href="/page/2" className="next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                    <button className="load-more btn" type="button">
                        Load more posts
                    </button>
            </footer>  
          </Fragment>
        )
      }
}

export default Header;





