export default function (id) {
	return (dispatch, getState, { firestore, auth }) => {
		firestore.collection("rooms").doc(id).get().then((data) => {
			return dispatch({type:"CHAT", chat:data})
		})
	}
}