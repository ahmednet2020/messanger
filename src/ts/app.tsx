import * as React from 'react'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// redux & store
import { Provider } from 'react-redux'
import Store from './Store'
// pages
import Main from './pages/Main'
import Home from './pages/Home'
import Page404 from './pages/Page404'



const App = () => {
	return (
		<Provider store={Store}>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/singup" component={Home} />	
					<Route path="/messanger" component={Main} />
					<Route component={Page404} />
				</Switch>		
			</Router>
		</Provider>
	)
}

export default App;