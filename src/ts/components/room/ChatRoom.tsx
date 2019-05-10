import * as React from 'react'
// import components
import Textbox from './layout/Textbox'
// import style file
import './ChatRoom.scss'

const ChatRoom = () => {
	return (
		<div className="ChatRoom">
			<div className="message-box">
				<h2>
					message
				</h2>
			</div>
			<Textbox />
		</div>
	)
}

export default ChatRoom;