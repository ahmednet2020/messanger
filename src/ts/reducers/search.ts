
export default function (state = [] , action) {
	switch (action.type) {
    case 'SEARCH':
      return action.users
      break;
    default:
      return state
      break;
  }
}