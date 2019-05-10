import * as React from 'react'
// import connect for store
import { connect } from 'react-redux'
// import style file
import './RoomActiveHead.scss'
const RoomActiveHead = ({getHash, getchat}) => {
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
				id
			</h2>
		</div>
	)
}

// redux functions
const mapStateToProps = (state:any) => {
  return {
  }
}
const mapActionToProps = (dispatch:any) => {
  return {
  }
}
export default connect(mapStateToProps, mapActionToProps)(RoomActiveHead);