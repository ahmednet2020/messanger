import * as React from 'react'
import Textbox from './layout/Textbox'
//
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