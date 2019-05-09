import * as React from 'react'

import Auth from '../components/Auth'
import Textform from '../components/forms/layout/Textform'

const Home = (props) => {
	const url = props.match.url.replace("/","");
	return (
		<main className="container-fluid">
			<div className="row">
				<div className="col-0 col-md-4 col-lg-6">
					<Textform />
				</div>
				<div className="col-12 col-md-8 col-lg-6">
					<Auth url={url}/>
				</div>
			</div>
		</main>
	)
}
export default Home;