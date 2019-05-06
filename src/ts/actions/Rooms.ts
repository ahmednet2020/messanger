
export default function (action) {
	return (dispatch, getState, { firestore, auth }) => {
		firestore.collection("rooms").get().then((doc) => {
			return dispatch({type:"ROOM_LIST", rooms:doc.docs})
		})
	}
}