export default function (id, uid) {
	return (dispatch, getState, { firestore, auth }) => {
		firestore.collection("rooms").doc(id).get()
		.then((doc) => {
			let data = doc.data()
			if(data)
			{
				return dispatch({type:"ROOM", message:data})
			} else {
				firestore.collection("rooms").doc(`${id}${uid}`).set({
					"messages":"send a first message",
					"img":"https://cdn.pixabay.com/photo/2017/09/04/20/47/child-2715429_960_720.jpg",
					ceateAt:new Date()
				})
				.then(doc => {
					return dispatch({type:"ROOM", message:{messages:"send a first message"}})
				})
			}
		})
		.catch(err => console.log(err.message))
	}
}