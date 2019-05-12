
export default function (state = {} , action) {
	switch (action.type) {
    case 'GET_MESSAGE':
      return action.message
      break;
    default:
      return state
      break;
  }
}