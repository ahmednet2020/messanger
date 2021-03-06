import * as React from 'react'
// import router link
import {  Link } from 'react-router-dom'
// import components
import Menu from './layout/Menu'
// import style file
import './Setting.scss'

const Setting = () => {
	return (
		<div className="setting">
			<a href="#" role="button" aria-label="new message" title="new message" className="new-message">
				<i className="far fa-sticky-note"></i>
			</a>
			<Link to="/"><h1>Messenger</h1></Link>
			<div className="menu-setting">
				<a className="setting-icon" aria-label="setting" title="setting" onClick={(e)=> {
					e.preventDefault()
					let menu = document.querySelector(".menu");
					menu.classList.toggle("active");
				}}>
					<i className="fas fa-cog"></i>
				</a>
				<Menu />
			</div>
		</div>
	)
}

export default Setting;