import * as React from 'react'

const RoomActiveHead = () => {
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
				room name
			</h2>
		</div>
	)
}

export default RoomActiveHead;