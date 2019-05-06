
export default function (state = false , action) {
	switch (action.type) {
    case 'CHAT':
      return action.chat;
      break;
    default:
      return state
      break;
  }
}