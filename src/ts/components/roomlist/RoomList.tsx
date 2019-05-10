import * as React from 'react'
// import connect for store
import { connect } from 'react-redux'
// import components
import Room from './layout/Room'
// import actions getRooms
import getRooms from '../../actions/Rooms'

const RoomList = ({getHash, rooms, getRooms}) => {
	React.useEffect(() => {
		getRooms("")
	},[rooms])
	return (
		<div className="rooms">
			<ul>
			{
				rooms && rooms.map((rooms) => {
					return <Room {...rooms.data()} key={rooms.id} getHash={getHash}/>
				})
			}
			</ul>
		</div>
	)
}
// redux functions
const mapStateToProps = (state:any) => {
  return {
  	rooms: state.rooms
  }
}
const mapActionToProps = (dispatch:any) => {
  return {
  	getRooms: (id) => dispatch(getRooms(id))
  }
}

export default connect(mapStateToProps, mapActionToProps)(RoomList);