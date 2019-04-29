import * as React from 'react'
import * as ReactDom from 'react-dom'

import App from './ts/app'
import './scss/main.scss'


class Index extends React.Component<{},{}> {
	public render() {
		return (
			<div>
				<App/>
			</div>
		)
	}
}

ReactDom.render(<Index/>, document.getElementById("app"))