import * as React from 'react'
import {  Link } from 'react-router-dom'
import './Login.scss'
const Login = () => {
	return (
		<main className="container-fluid">
			<div className="row">
				<div className="col-0 col-md-4 col-lg-6">
				<section className="text-login">
				<h5 className="logo-head">
					<Link to="/messanger">messanger</Link>
				</h5>
				<p className="logo-p">
					is keep you connecting with your frineds
				</p>
				</section>
				</div>
				<div className="col-12 col-md-8 col-lg-6">
				form
				</div>
			</div>
		</main>
	)
}
export default Login;