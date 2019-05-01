import * as React from 'react'
import Setting from '../components/Setting'
import Search from '../components/Search'
import Rooms from '../components/Rooms'

const RoomList = ({getHash}) => {
	return (
		<div>
			<Setting/>
			<Search/>
			<Rooms getHash={getHash}/>
		</div>
	)
}

export default RoomList;