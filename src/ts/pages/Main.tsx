import * as React from 'react'
// import redux 
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// components
import UserList from '../components/UserList'
import RoomActive from '../components/RoomActive'

//
import getMessage from '../actions/getMessage'

const Main = ({location, auth, getMessage}) => {
	const hashId = location.hash.replace("#", "") || "1";
	if(!auth.user) return ( <Redirect to="/"/> );
	React.useEffect(()=>{
		if(hashId !== "1")
		{
			getMessage(hashId, auth.user.uid)
		}
	},[hashId])
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
const mapActionToProps = (dispatch:any) => {
  return {
  	getMessage: (id, uid) => dispatch(getMessage(id, uid))
  }
}
export default connect(mapStateToProps, mapActionToProps)(Main);