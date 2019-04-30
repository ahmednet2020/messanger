import * as React from 'react'

import RoomList from './layout/RoomList'
import RoomActive from './layout/RoomActive'
const App = () => {
	return (
		<main className="container-fluid">
			<div className="row">
				<section className="col-12 col-md-8 col-lg-9 pr-0">
					<RoomActive/>
				</section>
				<section className="col-12 col-md-4 col-lg-3 pl-0">
					<RoomList/>
				</section>
			</div>
		</main>
	)
}

export default App;