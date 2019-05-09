import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import { firestore, auth } from './config/fbConfig'
import rootReducers from './reducers/rootReducers'

const Store = createStore(rootReducers,applyMiddleware(thunk.withExtraArgument({firestore, auth})))
auth.onAuthStateChanged(user => {
	if(user) return Store.dispatch({"type":"SING_IN_SUSS","user":user});
	return Store.dispatch({"type":"SING_OUT_SUSS"})
})
export default Store