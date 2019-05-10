import * as React from 'react'
// import router link
import {  Link } from 'react-router-dom'
// import style file
import './Textform.scss'

const Textform = () => {
	return (
		<section className="text-form">
			<h5 className="logo-head">
				<Link to="/messanger">messanger</Link>
			</h5>
			<p className="logo-p">
				is keep you connecting with your frineds
			</p>
		</section>
	)
}

export default Textform;
