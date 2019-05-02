import * as React from 'react'

import ChatRoom from '../components/ChatRoom'
import RoomSetting from '../components/RoomSetting'
import RoomActiveHead from '../components/RoomActiveHead'
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