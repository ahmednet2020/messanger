import * as React from 'react'

import './RoomSetting.scss';
const RoomSetting = () => {
	return (
		<div>
			<div className="setting-list">
				<h4 aria-expanded="true" className="setting-btn" onClick={handleClick}> setting 
					<span><i className="fas fa-chevron-down arows"></i></span>
				</h4>
				<ul className="setting-manu">
					<li className="li-setting">
						<span className="setting-icon"><i className="fas fa-search"></i></span>
						setting 1
					</li>
					<li className="li-setting">
						<span className="setting-icon"><i className="fas fa-palette"></i></span>
						setting 2
					</li>
					<li className="li-setting">
						<span className="setting-icon"><i className="far fa-edit"></i></span>
						setting 3
					</li>
					<li className="li-setting">
						<span className="setting-icon"><i className="fas fa-thumbs-up"></i></span>
						setting 4
					</li>
					<li className="li-setting">
						<span className="setting-icon"><i className="far fa-bell"></i></span>
						setting 5
					</li>
				</ul>
			</div>
		</div>
	)
}
const handleClick = (e) => {
	let list = document.querySelector(".setting-list");
	let btn = list.querySelector(".setting-btn");
	list.classList.toggle("close")
	if(list.classList.contains("close"))
	{
		btn.setAttribute("aria-expanded","false")
	} else {
		btn.setAttribute("aria-expanded","true")
	}
}
export default RoomSetting;