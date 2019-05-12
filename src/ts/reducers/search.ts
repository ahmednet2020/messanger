
export default function (state = {val:"", users:[]} , action) {
	switch (action.type) {
    case 'SEARCH':
      return {...action}
      break;
    default:
      return state
      break;
  }
}