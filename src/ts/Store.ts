import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import { firestore, auth } from './config/fbConfig'
import rootReducers from './reducers/rootReducers'

const Store = createStore(rootReducers,applyMiddleware(thunk.withExtraArgument({firestore, auth})))

export default Store