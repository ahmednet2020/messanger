export default function (id, uid) {
	return (dispatch, getState, { firebase, firestore, auth }) => {
		firestore.collection("rooms").doc(id).get()
		.then((doc) => {
			let state = doc.data()
			if(state)
			{
				return dispatch({type:"ROOM", message:state})
			} else {
				firestore.collection("rooms").add({
					"users":[uid,id],
					"messages":"send a first message",
					"img":"https://cdn.pixabay.com/photo/2017/09/04/20/47/child-2715429_960_720.jpg",
					ceateAt:new Date()
				}).then(doc => {
					let CreateIdRoom = Promise.all([
						firestore.collection("users").doc(id).update({
							"rooms":firebase.firestore.FieldValue.arrayUnion(doc.id)
						}).then(e=>{
							console.log(e)
						}),
						firestore.collection("users").doc(uid).update({
							"rooms":firebase.firestore.FieldValue.arrayUnion(doc.id)
						}).then(e=>e)
					]);
					CreateIdRoom.then(e => {
						dispatch({type:"ROOM", message:"send a first message"})
					})
				})
			}
		})
		.catch(err => console.log(err.message))
	}
}