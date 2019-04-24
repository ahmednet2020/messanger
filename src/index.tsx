import * as React from 'react'
import * as ReactDom from 'react-dom'

import App from './ts/app'
import './scss/style.scss'
import * as logo from './img/logo.png'

const context = React.createContext({})

const Provider = (props) => {
	return (
		<context.Provider value={{name:"ahmed", age:20}}>
			{props.children}
		</context.Provider>
	)
}

function Decrty(message) {
	let x = confirm(message)
	return (target) => {
		console.log(target)
		console.log(x)
	}
}

@Decrty("welcome to app")
class Index extends React.Component<{},{}> {
	state = {x:true}
	public render() {
		return (
			<Provider>
			<div>
				<img src={logo} alt="s" title="a" />
				<context.Consumer>
					{
						(val:any) => {
							return(
								<h1>{val.name}</h1>
							)
						}
					}
				</context.Consumer>
				<h1 className='name'>welcome </h1>
				<button type="button" onClick={() => {
					this.setState((state, props) => ({x:!state['x']}))
				}}> hidden</button>
				<App x={this.state.x} />
			</div>
			</Provider>
		)
	}
}

ReactDom.render(<Index/>, document.getElementById("app"))