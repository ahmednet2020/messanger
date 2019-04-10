import * as React from 'react'
import * as ReactDom from 'react-dom'

import { name } from './ts/app'
import './scss/style.scss'
class App extends React.Component<{},{}> {
	public render() {
		return (
			<div>
				<h1 className='name'>{name}</h1>
			</div>
		)
	}
}

ReactDom.render(<App/>, document.getElementById("app"))