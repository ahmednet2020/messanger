import * as React from 'react'
// import components
import Setting from './roomlist/Setting'
import Search from './roomlist/Search'
import RoomList from './roomlist/RoomList'

const UserList = ({getHash}) => {
	return (
		<div>
			<Setting/>
			<Search/>
			<RoomList getHash={getHash}/>
		</div>
	)
}

export default UserList;
