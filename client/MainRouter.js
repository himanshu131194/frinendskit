import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Home'

import Posts from './components/collection/Posts/'
import Accounts from './components/collection/Accounts/'


class MainRouter extends Component{
	  render(){
	  	  return(
             <Fragment>
			   <Router>
					<Home/>
					<Switch>
							<Route exact path="/" component={Posts}/>
							<Route exact path="/tags/:tag" component={Posts}/>
							<Route exact path="/section/:section" component={Posts}/>
							<Route path="/account/:type" component={Accounts}/>
							<Route path="/account" component={Accounts}/>
					</Switch>
			   </Router>
             </Fragment>
	  	  )
	  }
}

export default MainRouter;