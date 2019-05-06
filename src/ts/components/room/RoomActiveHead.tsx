import * as React from 'react'
import { connect } from 'react-redux'
import getchat from '../../actions/Chat'

import './RoomActiveHead.scss'
const RoomActiveHead = ({getHash, getchat, chat}) => {
	React.useEffect(() => {
		if(getHash) return getchat(getHash);
	},[getHash])
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
				{chat && chat.id}
			</h2>
		</div>
	)
}
const mapStateToProps = (state:any) => {
  return {
  	chat: state.chat
  }
}
const mapActionToProps = (dispatch:any) => {
  return {
  	getchat: (id) => {dispatch(getchat(id))}
  }
}
export default connect(mapStateToProps, mapActionToProps)(RoomActiveHead);