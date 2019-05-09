import * as React from 'react'
import { connect } from 'react-redux'
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
		</form>
	)
}

function handleSubmit(singin, e) {
	e.preventDefault()
	const data = {"email": e.target.email.value, "password": e.target.password.value}
	singin(data);
}
function mapStateToProps(state)
{
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