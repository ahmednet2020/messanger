import * as React from 'react'
// components
import UserList from '../components/UserList'
import RoomActive from '../components/RoomActive'

const Main = (props) => {
	const hashId = props.location.hash.replace("#", "") || "1";
	const  [ getHash, setHash ] = React.useState(hashId)
	React.useEffect(()=> {
		setHash(hashId)
	},[hashId])
	return (
		<main className="container-fluid">
			<div className="row">
				<section className="col-12 col-md-8 col-lg-9">
						<RoomActive getHash={getHash}/>
				</section>
				<section className="col-12 col-md-4 col-lg-3">
						<UserList getHash={getHash}/>
				</section>
			</div>
		</main>
	)
}

export default Main;