import * as React from 'react'
import hooks from './hooks/hooks'
import '../scss/main.scss'
 const App = ({x}) => {
	let [ getText, setText ]:any = hooks('ahmed', []);
	return (
		<form className="form-1">
			<h2>{getText}</h2>
			{x && <p>this is true</p>}
			<input type="text" value={getText} onChange={(e) => {
				setText(e.target.value)
			}}/>
		</form>
	)
}

export default React.memo(App);