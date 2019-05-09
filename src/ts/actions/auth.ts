export function singin({email, password}) {
	return (dispatch, getState, { firestore, auth }) => {
		auth.signInWithEmailAndPassword(email, password)
			.then((user) => {
				return dispatch({"type":"SING_IN_SUSS","user":user});
			})
			.catch((error) => {
				return dispatch({"type":"SING_IN_Err","err":error.message})
		})
	}
}
export function singout() {
	return (dispatch, getState, { firestore, auth }) => {
		auth.signOut()
		.then(user => {
			return dispatch({"type":"SING_OUT_SUSS"})
		})
		.catch(error => {
			return dispatch({"type":"SING_OUT_Err","err":error.message})
		})
	}
}
export function singup({email, password}) {
	return (dispatch, getState, { firestore, auth }) => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((user) => {			
				 return dispatch({"type":"SING_UP_SUSS","user":user})
			})
			.catch((error) => {
				return dispatch({"type":"SING_UP_Err","err":error.message})
		})
	}
}