import { useState, useEffect } from 'react'

export default () => {
	let [ getHash, setHash ] = useState()
	useEffect(()=> {
		return () => {
		}
	},[])
	return [getHash, getHash]
}