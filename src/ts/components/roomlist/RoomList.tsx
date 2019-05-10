import * as React from 'react'
// import connect for store
import { connect } from 'react-redux'
// import components
import Room from './layout/Room'
import User from './layout/User'
// import actions getRooms
import getRooms from '../../actions/Rooms'

const RoomList = ({getHash, uid,search, rooms, getRooms}) => {
	React.useEffect(() => {
		getRooms("")
	},[])
	return (
		<div className="rooms">
			<ul>
			{
				search.length > 0? search && search.filter(docs => docs.id !== uid)
				.map((data) => {
					return <User {...data.data()} id={data.id} key={data.id} getHash={getHash}/>
				}) : rooms && rooms.map((rooms) => {
					return <Room {...rooms.data()} id={rooms.id} key={rooms.id} getHash={getHash}/>
				})
			}
			</ul>
		</div>
	)
}
// redux functions
const mapStateToProps = (state) => {
	return {
		search:state.search,
		rooms:state.rooms,
		uid: state.auth.user.uid
	}
}
const mapActionToProps = (dispatch:any) => {
  return {
  	getRooms: (id) => dispatch(getRooms(id))
  }
}

export default connect(mapStateToProps, mapActionToProps)(RoomList);