import * as React from 'react'
// import connect for store
import { connect } from 'react-redux'
// import actions singin
import { singin } from '../../actions/auth'

const Singin = ({auth, singin}) => {
	return (
		<form className="singin-form" onSubmit={handleSubmit.bind(null,singin)}>
			<label aria-label="email" title="email">
				<input type="text" placeholder="email" name="email"/>
			</label>
			<label aria-label="password" title="password">
				<input type="password" placeholder="password" name="password"/>
			</label>
			<label aria-label="singin" title="singin">
				<input type="submit" value="singin" name="singin"/>
			</label>
			{
				auth.err && <div className="err"> {auth.message } </div>

			}
			{
				auth.state && <div className="err"> {auth.state } </div>
			}
		</form>
	)
}
// for hosting
function handleSubmit(singin, e) {
	e.preventDefault()
	const data = {"email": e.target.email.value, "password": e.target.password.value}
	singin(data);
}
// redux functions
const mapStateToProps = (state) => {
	return {
		auth:state.auth
	}
}
const mapActionToProps = (dispatch:any) => {
  return {
  	singin: (data) => dispatch(singin(data))
  }
}
export default connect(mapStateToProps, mapActionToProps)(Singin);