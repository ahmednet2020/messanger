
export default function (state = {} , action) {
	switch (action.type) {
    case 'ROOM':
      return action.message
      break;
    default:
      return state
      break;
  }
}