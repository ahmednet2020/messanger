import * as React from 'react'

const Singup = () => {
	return (
		<form className="singin-form">
			<label aria-label="email" title="email">
				<input type="text" placeholder="email" name="email"/>
			</label>
			<label aria-label="name" title="name">
				<input type="name" placeholder="name" name="name"/>
			</label>
			<label aria-label="password" title="password">
				<input type="password" placeholder="password" name="password"/>
			</label>
			<label aria-label="singin" title="singin">
				<input type="submit" value="singin" name="singin"/>
			</label>
		</form>
	)
}
export default Singup;