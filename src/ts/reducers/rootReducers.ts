import { combineReducers } from 'redux'
import rooms from './rooms'
import chat from './chat'
const rootReducers = combineReducers({
	rooms,
	chat
})
export default rootReducers;