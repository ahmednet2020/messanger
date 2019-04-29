import * as React from 'react'

import ChatRoom from '../components/ChatRoom'
import RoomSetting from '../components/RoomSetting'
import RoomActiveHead from '../components/RoomActiveHead'
const RoomActive = () => {
	return (
		<div className="RoomActive">
			<div className="row">
				<div className="col-12">
					<RoomActiveHead/>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-4 col-lg-6">
					<RoomSetting/>
				</div>
				<div className="col-12 col-md-8 col-lg-6">
					<ChatRoom/>
				</div>
			</div>
		</div>
	)
}

export default RoomActive;