import * as React from 'react'

const Setting = () => {
	return (
		<div className="setting">
			<a href="#" role="button" aria-label="new message" title="new message" className="new-message">
				<i className="far fa-sticky-note"></i>
			</a>
			<h1>Messenger</h1>
			<div className="menu-setting">
				<a className="setting-icon" aria-label="setting" title="setting">
					<i className="fas fa-cog"></i>
				</a>
			</div>
		</div>
	)
}

export default Setting;