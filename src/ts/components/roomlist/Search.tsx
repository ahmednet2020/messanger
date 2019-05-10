import * as React from 'react'
// import style file
import './Search.scss'

const Search = () => {
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
				aria-label="search in messenger"/>
			</label>
		</div>
	)
}

export default Search;