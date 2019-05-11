
export default function (uid) {
	return (dispatch, getState, { firestore, auth }) => {
			firestore.collection("users").doc(uid).get()
			.then( async (doc) => {
				let list = await doc.data().rooms;
				let rooms = await list.map((roomid) => {
						return firestore.collection("rooms").doc(roomid).get()
						.then((doc) => {
							return doc;
					})
				}).map(doc => doc.then(doc => doc.data()))
				console.log(rooms)
				return dispatch({type:"ROOM_LIST", rooms:rooms})
			})
	}
}