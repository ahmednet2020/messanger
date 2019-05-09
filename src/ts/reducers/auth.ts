export default function auth(state={"err": false}, action) {
	switch (action.type) {
    case 'SING_IN_SUSS':
      return {"err": false,"user":action.user};
      break;
    case 'SING_IN_Err':
      return {"err": true,"message":action.err};
      break;
    case 'SING_UP_SUSS':
      return {"err": false, "user": null};
      break;
    case 'SING_UP_Err':
      return {"err": true,"message":action.err};
      break;
    case 'SING_OUT_SUSS':
      return {"err": false, "user":null};
      break;
    case 'SING_OUT_Err':
      return {"err": false, "message":action.err};
      break;
    case 'REST_Err':
      return {"err": false}
      break;
    default:
      return state
      break;
  }
}