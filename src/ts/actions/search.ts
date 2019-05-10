export default function search(search) {
	return (dispatch, getState, { firestore, auth }) => {
		return firestore.collection("users").where("name", "==", search).get()
		.then((data)=> {
			return dispatch({"type":"SEARCH","users":data.docs})
		})
	}
}