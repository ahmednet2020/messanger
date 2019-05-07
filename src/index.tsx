import * as React from 'react'
import * as ReactDom from 'react-dom'
// css
import './scss/main.scss'
// import app component
import App from './ts/app'

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