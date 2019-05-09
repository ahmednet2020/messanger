
export default function (state = {} , action) {
	switch (action.type) {
    case 'CHAT':
      return action.chat
      break;
    default:
      return state
      break;
  }
}