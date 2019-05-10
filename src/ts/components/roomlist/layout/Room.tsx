import * as React from 'react'
// import router link
import {  Link } from 'react-router-dom'
// import style file
import './Room.scss'

const Room = ({roomName, lastMessage, img, id, getHash}) => {
	return (
		<li>
			<Link to={{hash:id}} role="link" tabIndex={0}>
				<div className={`room ${getHash === id ? "active": false}`} id={id}>
					<div className="info">
						<div className="room-info">
							<span className="room-name">
								{roomName? roomName:"no name"}
							</span>
							<span className="room-time">
								<abbr title="2019-03-27">
									<time dateTime="2019-03-27"> 2019-03-27 </time>
								</abbr>
							</span>
						</div>
						<div className="last-message">
							{lastMessage? lastMessage:"you can call him now"}
						</div>
					</div>
					<div className="img-room">
						<img src={img} title="img" alt="img"/>
					</div>
				</div>
			</Link>
		</li>
	)
}

export default Room;