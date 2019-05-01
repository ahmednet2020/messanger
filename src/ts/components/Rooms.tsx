import * as React from 'react'
import Room from './Room'
import {roomsList} from '../data'
const Rooms = ({getHash}) => {
	return (
		<div className="rooms">
			<ul>
			{
				roomsList.map((rooms) => {
					return <Room {...rooms} key={Math.random()} getHash={getHash}/>
				})
			}
			</ul>
		</div>
	)
}

export default Rooms;