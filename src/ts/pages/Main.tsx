import * as React from 'react'
// import redux 
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// components
import UserList from '../components/UserList'
import RoomActive from '../components/RoomActive'

const Main = (props) => {
	console.log(props.auth.user)
	const hashId = props.location.hash.replace("#", "") || "1";
	if(!props.auth.user) return ( <Redirect to="/"/> );
	return (
		<main className="container-fluid">
			<div className="row">
				<section className="col-12 col-md-8 col-lg-9">
						<RoomActive getHash={hashId}/>
				</section>
				<section className="col-12 col-md-4 col-lg-3">
						<UserList getHash={hashId}/>
				</section>
			</div>
		</main>
	)
}
const mapStateToProps = (state) => {
	return {
		auth:state.auth
	}
}
export default connect(mapStateToProps)(Main);