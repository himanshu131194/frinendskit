import React, { Component, Fragment, Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Home'

const Posts = lazy(() => import('./components/collection/Posts/'));
const Accounts = lazy(() => import('./components/collection/Accounts/'));


class MainRouter extends Component{
	  render(){
	  	  return(
             <Fragment>
			   <Router>
					<Home/>
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Route exact path="/" component={Posts}/>
							<Route exact path="/tags/:tag" component={Posts}/>
							<Route exact path="/section/:section" component={Posts}/>
							<Route path="/account/:type" component={Accounts}/>
							<Route path="/account" component={Accounts}/>
						</Switch>
					</Suspense>
			   </Router>
             </Fragment>
	  	  )
	  }
}

export default MainRouter;