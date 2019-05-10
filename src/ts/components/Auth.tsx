import * as React from 'react'
// import router link
import {  Link } from 'react-router-dom'
// import redux connect to use store
import { connect } from 'react-redux'
// import component
import Singup from './forms/Singup'
import Singin from './forms/Singin'
// import style file
import './Auth.scss'
const Auth = ({url, RESTErr}) => {
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

const mapActionToProps = (dispatch:any) => {
  return {
  	RESTErr: () => dispatch({"type":"REST_Err"}),
  }
}
export default connect(null, mapActionToProps)(Auth);
