import * as React from 'react'
import { connect } from 'react-redux'
import Room from './layout/Room'
import getRooms from '../../actions/Rooms'
const RoomList = ({getHash, rooms, getRooms}) => {
	React.useEffect(() => {
		getRooms("")
	},[rooms])
	return (
		<div className="rooms">
			<ul>
			{
				rooms.map((rooms) => {
					return <Room {...rooms.data()} key={rooms.id} getHash={getHash}/>
				})
			}
			</ul>
		</div>
	)
}
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