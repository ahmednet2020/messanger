import * as React from 'react'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import hash from './hooks/hash'
import RoomList from './layout/RoomList'
import RoomActive from './layout/RoomActive'
const Main = (props) => {
	const hashId = props.location.hash.replace("#", "") || "1";
	const  [ getHash ] = hash(hashId, [hashId]);
	return (
		<main className="container-fluid">
			<div className="container">
				<div className="row">
					<section className="col-12 col-md-8 col-lg-9">
							<RoomActive getHash={getHash}/>
					</section>
					<section className="col-12 col-md-4 col-lg-3">
							<RoomList getHash={getHash}/>
					</section>
				</div>
			</div>
		</main>
	)
}
const page404 = () => {
	return (
		<div>
			404
		</div>
	)
}
const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route component={page404} />
			</Switch>		
		</Router>
	)
}

export default App;