
export default function (state = [] , action) {
	switch (action.type) {
    case 'ROOM_LIST':
      return [...action.rooms]
      break;
	 case 'NO_LIST':
	  return []
	  break;
    default:
      return state
      break;
  }
}