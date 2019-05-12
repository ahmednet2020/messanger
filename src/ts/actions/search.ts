export default function search(search) {
	return (dispatch, getState, { firestore, auth }) => {
		return firestore.collection("users").where("name", "==", search).get()
		.then((data)=> {
			let users = data.docs.map(doc => {
				return {id:doc.id, ...doc.data()}
			})
			return dispatch({"type":"SEARCH","users":users, "val":search})
		})
	}
}