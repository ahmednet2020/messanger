import { combineReducers } from 'redux'
import rooms from './rooms'
import chat from './chat'
import auth from './auth'
const rootReducers = combineReducers({
	rooms,
	chat,
	auth
})
export default rootReducers;