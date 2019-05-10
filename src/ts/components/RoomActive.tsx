import * as React from 'react'
// import components
import ChatRoom from './room/ChatRoom'
import RoomSetting from './room/RoomSetting'
import RoomActiveHead from './room/RoomActiveHead'
// import style file
import './RoomActive.scss'
const RoomActive = ({getHash}) => {
	return (
		<div className="RoomActive">
			<div className="row">
				<div className="col-12">
					<RoomActiveHead getHash={getHash}/>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-4 col-lg-4">
					<RoomSetting/>
				</div>
				<div className="col-12 col-md-8 col-lg-8">
					<ChatRoom/>
				</div>
			</div>
		</div>
	)
}

export default RoomActive;