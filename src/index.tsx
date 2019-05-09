import * as React from 'react'
import * as ReactDom from 'react-dom'
// css
import './scss/main.scss'
// import app component
import App from './ts/app'

const Index = () => {
	return (
		<>
			<App/>
		</>
	)
}
ReactDom.render(<Index/>, document.getElementById("app"))