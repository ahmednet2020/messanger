import * as React from 'react'
// import connect for store
import { connect } from 'react-redux'
// import actions singup
import { singup } from '../../actions/auth'

const Singup = ({auth, singup}) => {
	return (
		<form className="singup-form" onSubmit={handleSubmit.bind(null, singup)}>
			<label aria-label="name" title="name">
				<input type="text" placeholder="name" name="name"/>
			</label>
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

// for hosting
function handleSubmit(singup, e) {
	e.preventDefault()
	const data = {
		"name":e.target.name.value,
		"email": e.target.email.value,
		"password": e.target.password.value
	}
	singup(data);
}
// redux functions
const mapStateToProps = (state) => {
	return {
		auth:state.auth
	}
}
const mapActionToProps = (dispatch:any) => {
  return {
  	singup: (data) => dispatch(singup(data))
  }
}
export default connect(mapStateToProps, mapActionToProps)(Singup);