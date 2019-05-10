import * as React from 'react'
// import connect for store
import { connect } from 'react-redux'
// import actions singout
import { singout } from '../../../actions/auth'
// import style file
import './Menu.scss'

const Menu = ({user, singout}) => {
	return (
		<div className="menu">
			<ul role="menu">
				<li role="presentation" className="menu-item">
					<a href="#" target="_blank" role="menuitem">
						{user && user.name? user.name:"no name"}
					</a>
				</li>
				<li role="separator" className="menu-line"></li>
				<li role="presentation" className="menu-item">
					<a href="#" target="_blank" role="menuitem">
						setting
					</a>
				</li>
				<li role="presentation" className="menu-item">
					<a href="#" target="_blank" role="menuitem"
						onClick={handleOut.bind(null, singout)}>
						singout
					</a>
				</li>
			</ul>
		</div>
	)
}

function handleOut(singout,e) {
	e.preventDefault()
	singout();
}
// redux functions
const mapStateToProps = (state) => {
	return {
		user:state.auth.user
	}
}
const mapActionToProps = (dispatch:any) => {
  return {
  	singout: () => dispatch(singout()),
  }
}
export default connect(mapStateToProps,mapActionToProps)(Menu);