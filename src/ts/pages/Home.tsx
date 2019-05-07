import * as React from 'react'
import {  Link } from 'react-router-dom'
import Singup from '../components/forms/Singup'
import Singin from '../components/forms/Singin'
import './Home.scss'
const Home = (props) => {
	const url = props.match.url.replace("/","");
	return (
		<main className="container-fluid">
			<div className="row">
				<div className="col-0 col-md-4 col-lg-6">
				<section className="text-form">
				<h5 className="logo-head">
					<Link to="/messanger">messanger</Link>
				</h5>
				<p className="logo-p">
					is keep you connecting with your frineds
				</p>
				</section>
				</div>
				<div className="col-12 col-md-8 col-lg-6">
					<section className="forms">
						<div className="btn-forms">
							<Link to="/singup" role="button" className={url === "singup"? "active":null}><h4> singup </h4></Link>
							<Link to="/" role="button" className={url === "singup"? null:"active"}><h4> singin </h4></Link>
						</div>
						{url === "singup"? <Singup/>:<Singin/>}
					</section>
				</div>
			</div>
		</main>
	)
}
export default Home;