export default function (id, uid) {
	return (dispatch, getState, { firebase, firestore, auth }) => {
		firestore.collection("rooms").get()
		.then((doc) => {
			let data = doc.docs.filter(data => {
				if(data.data().users.length >= 3) return false;
					if(data.data().users.indexOf(id) !== -1 && data.data().users.indexOf(uid) !== -1)
					{
						return true;
					} else {
						return false
					}
			});
			if(data.length)
			{
				console.log(data)
				//return dispatch({type:"ROOM", message:data})
			} else {
				firestore.collection("rooms").add({
					"messages":"send a first message",
					"img":"https://cdn.pixabay.com/photo/2017/09/04/20/47/child-2715429_960_720.jpg",
					ceateAt:new Date()
				}).then(doc => {
					let CreateIdRoom = Promise.all([
						firestore.collection("users").doc(id).update({
							"rooms":firebase.firestore.FieldValue.arrayUnion(doc.id)
						}).then(e=>e),
						firestore.collection("users").doc(uid).update({
							"rooms":firebase.firestore.FieldValue.arrayUnion(doc.id)
						}).then(e=>e)
					]);
					CreateIdRoom.then(e => {
						console.log(e)
					})
				})
			}
		})
		.catch(err => console.log(err.message))
	}
}