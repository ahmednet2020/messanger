import * as React from 'react'

import {roomsList} from '../data';

const RoomActiveHead = ({getHash}) => {
	return (
		<div className="RoomActiveHead">
			<ul>
				<li>
					<a href="#">
						<span aria-label="startVoiceCall" title="startVoiceCall" className="startVoiceCall">
							<i className="fas fa-phone"></i>
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span aria-label="startVideoCall" title="startVideoCall" className="startVideoCall">
							<i className="fas fa-video"></i>
						</span>
					</a>
				</li>
				<li>
					<a href="#" role="button" aria-expanded="true">
						<span aria-label="info_panel_button" title="info_panel_button" className="info_panel_button">
							<i className="fas fa-info-circle"></i>
						</span>
					</a>
				</li>
			</ul>
			<h2>
				{roomsList.filter(room => room.id === getHash)[0].roomName}
			</h2>
		</div>
	)
}

export default RoomActiveHead;