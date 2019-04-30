import * as React from 'react'

const Search = () => {
	let searchVal;
	return (
		<div className="search">
			<label>
				<span className="label-icon">
					<i className="fas fa-search"></i>
				</span>
				<input autoComplete="off" className="search-input" placeholder="search in messenger" type="text" aria-label="search in messenger" value={searchVal} onChange={(e) => {
					searchVal = e.target.value;
				}}/>
			</label>
		</div>
	)
}

export default Search;