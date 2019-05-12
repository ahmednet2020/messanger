
export default function (uid) {
	return (dispatch, getState, { firestore, auth }) => {
			firestore.collection("users").doc(uid).get()
			.then((doc) => {
				let list =  doc.data().rooms;
				if(list.length){
					let rooms = Promise.all(list.map((roomid) => {
						return firestore.collection("rooms").doc(roomid).get()
						.then((doc) => {
							let name =  doc.data().users.filter(id => id!==uid)[0]
							return firestore.collection("users").doc(name).get()
							.then(name => {
								return {id:doc.id, name:name.data().name,...doc.data()};			 
							})
						});
					})).then(doc => {
						dispatch({type:"ROOM_LIST", rooms:doc})
					})
				} else {
						dispatch({type:"NO_LIST"})
				}
			})
	}
}