// this file for redux store config
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
// import reducers
import rootReducers from './reducers/rootReducers'
// import firebase config 
import { firebase ,firestore, auth } from './config/fbConfig'

const Store = createStore(
	rootReducers,
	applyMiddleware(thunk.withExtraArgument(
		{firebase, firestore, auth}
		))
)

auth.onAuthStateChanged((user):any => {
	if(user){
		firestore.collection("users").doc(user.uid).get()
		.then((data) => {
			return Store.dispatch({"type":"SING_IN","user":{uid:user.uid,...data.data()}});
		})
		.catch(err => console.log(err.massge))
	} else {
	 return Store.dispatch({"type":"SING_OUT_SUSS"})
	} 
})
export default Store