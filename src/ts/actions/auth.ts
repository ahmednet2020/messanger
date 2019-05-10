export function singin({email, password}) {
	return (dispatch, getState, { firestore, auth }) => {
		auth.signInWithEmailAndPassword(email, password)
			.then((user) => {
				return dispatch({"type":"SING_IN_SUSS"});
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
export function singup({email, password, name}) {
	return (dispatch, getState, { firestore, auth }) => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((user) => {		
				 return firestore.collection("users").doc(user.user.uid).set({
				 	email,
				 	name,
				 	img:"https://cdn.pixabay.com/photo/2017/09/04/20/47/child-2715429_960_720.jpg",
				 	createAt:new Date()
				 })
			})
			.then((data)=> {
				return dispatch({"type":"SING_UP_SUSS"})
				 
			})
			.catch((error) => {
				return dispatch({"type":"SING_UP_Err","err":error.message})
		})
	}
}