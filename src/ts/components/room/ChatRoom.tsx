import * as React from 'react'
// import components
import Textbox from './layout/Textbox'
// import style file
import './ChatRoom.scss'

const ChatRoom = ({message}) => {
	return (
		<div className="ChatRoom">
			<div className="message-box">
				<h2>
					{
						message.messages && Array.isArray(message.messages)?
						"is array"
						:
						message.messages
					}
				</h2>
			</div>
			<Textbox />
		</div>
	)
}
export default ChatRoom;