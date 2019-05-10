import { combineReducers } from 'redux'
import rooms from './rooms'
import auth from './auth'
import search from './search'
import getMessage from './getMessage'
const rootReducers = combineReducers({
	rooms,
	auth,
	search,
	getMessage
})
export default rootReducers;