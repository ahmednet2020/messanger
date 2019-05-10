import * as React from 'react'
//import actions search// import connect for store
import { connect } from 'react-redux'
import search from '../../actions/search'
// import style file
import './Search.scss'

const Search = ({searchAction}) => {
	const [getSearch, setSearch] = React.useState("");
	return (
		<div className="search">
			<label>
				<span className="label-icon">
					<i className="fas fa-search"></i>
				</span>
				<input autoComplete="off"
				className="search-input"
				placeholder="search in messenger"
				type="text"
				aria-label="search in messenger"
				name="search"
				value={getSearch}
				onChange={handleChange.bind(null,setSearch,searchAction)}/>
			</label>
		</div>
	)
}

function handleChange(setSearch,searchAction,e) {
	const val = e.target.value;
	setSearch(val)
	searchAction(val)

}
// redux functions
const mapActionsToProps = (dispatch) => {
	return {
		searchAction:(val) => {dispatch(search(val))}
	}
}
export default connect(null,mapActionsToProps)(Search);