import * as React from 'react'
import {  Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Singup from './forms/Singup'
import Singin from './forms/Singin'
import './Auth.scss'
const Auth = ({url, auth, RESTErr}) => {
	if(auth.user) return ( <Redirect to="/messanger"/> );
	return (
		<section className="forms">
			<div className="btn-forms">
				<Link to="/singup" role="button" className={url === "singup"? "active":null}
					onClick={() => {RESTErr()}}>
					<h4> singup </h4>
				</Link>
				<Link to="/" role="button" className={url === "singup"? null:"active"}
				 onClick={() => {RESTErr()}}>
					<h4> singin </h4>
				</Link>
			</div>
			{url === "singup"? <Singup/>:<Singin/>}
		</section>
	)
}
function mapStateToProps(state)
{
	return {
		auth:state.auth
	}
}
const mapActionToProps = (dispatch:any) => {
  return {
  	RESTErr: () => dispatch({"type":"REST_Err"}),
  }
}
export default connect(mapStateToProps,mapActionToProps)(Auth);
