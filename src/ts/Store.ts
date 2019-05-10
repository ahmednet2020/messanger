// this file for redux store config
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
// import reducers
import rootReducers from './reducers/rootReducers'
// import firebase config 
import { firestore, auth } from './config/fbConfig'

const Store = createStore(
	rootReducers,
	applyMiddleware(thunk.withExtraArgument(
		{firestore, auth}
		))
	)

auth.onAuthStateChanged(user => {
	if(user) return Store.dispatch({"type":"SING_IN_SUSS","user":user});
	return Store.dispatch({"type":"SING_OUT_SUSS"})
})
export default Store