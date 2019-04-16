import * as React from 'react'
import * as ReactDom from 'react-dom'

import App from './ts/app'
import './scss/style.scss'
import * as img from './colorwheel.png'
import * as img2 from './colorstar.jpg'
class Index extends React.Component<{},{}> {
	state = {x:true}
	public render() {
		return (
			<div>
				<img src={img} alt="s" title="a" />
				<img src={img2} alt="s" title="a" />
				<h1 className='name'>welcome </h1>
				<button type="button" onClick={() => {
					this.setState((state, props) => ({x:!state['x']}))
				}}> hidden</button>
				<App x={this.state.x} />
			</div>
		)
	}
}

ReactDom.render(<Index/>, document.getElementById("app"))