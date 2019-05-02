import * as React from 'react'

const Textbox = () => {
	const [getmessage, setMessage] = React.useState("")
	return (
		<div className="Textbox">
		<form className="Textbox-form" onSubmit={handleSubmit}>
			<label className="Textbox-label">
			<input autoComplete="off"
					placeholder="send message...." 
					type="text"
					className="Textbox-input" 
					aria-label="message box"
					name="text-message"
					value={getmessage} onChange={(event)=> {
						setMessage(event.target.value)
			}}/>
			</label>
			<label className="submit-label">
				<button type="submit" name="submit-button" className="submit-button">{getmessage? "send":<i className="fas fa-thumbs-up"></i>}</button>
			</label>
			</form>
		</div>
	)
}

const handleSubmit = (e) => {
	e.preventDefault()
	e.persist()
	let textMessage = e.target["text-message"].value;
	if(textMessage === "")
	{
		console.log("like")
	} else {
		console.log(textMessage)
	}
}

export default Textbox;