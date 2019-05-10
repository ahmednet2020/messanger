import * as React from 'react'
// import router Redirect
import { Redirect } from 'react-router-dom'
// import redux connect to use store
import { connect } from 'react-redux'
// import components
import Auth from '../components/Auth'
import Textform from '../components/forms/layout/Textform'

const Home = ({match, auth}) => {
	const url = match.url.replace("/","");
	if(auth.user) return ( <Redirect to="/messanger"/> );
	return (
		<main className="container-fluid">
			<div className="row">
				<div className="col-0 col-md-4 col-lg-6">
					<Textform />
				</div>
				<div className="col-12 col-md-8 col-lg-6">
					<Auth url={url}/>
				</div>
			</div>
		</main>
	)
}

const mapStateToProps = (state:any) => {
	return {
		auth:state.auth
	}
}
export default connect(mapStateToProps)(Home);