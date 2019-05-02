import * as React from 'react'

const Search = () => {
	const [getVal, setVal] = React.useState("")	
	return (
		<div className="search">
			<label>
				<span className="label-icon">
					<i className="fas fa-search"></i>
				</span>
				<input autoComplete="off" className="search-input" placeholder="search in messenger" type="text" aria-label="search in messenger" value={getVal} onChange={(e) => {
					setVal(e.target.value)
				}}/>
			</label>
		</div>
	)
}

export default Search;