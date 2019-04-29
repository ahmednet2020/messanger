import * as React from 'react'

import RoomList from './layout/RoomList'
import RoomActive from './layout/RoomActive'
const App = () => {
	return (
		<main className="container-fluid">
			<div className="row">
				<section className="col-12 col-md-6 col-lg-8 pr-0">
					<RoomActive/>
				</section>
				<section className="col-12 col-md-6 col-lg-4 pl-0">
					<RoomList/>
				</section>
			</div>
		</main>
	)
}

export default App;