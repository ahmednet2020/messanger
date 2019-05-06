
export default function (state = [] , action) {
	switch (action.type) {
    case 'ROOM_LIST':
      return [...action.rooms]
      break;
    default:
      return state
      break;
  }
}