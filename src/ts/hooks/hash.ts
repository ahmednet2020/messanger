import { useState, useEffect } from 'react'

export default (hash:string, dev?:any[]) => {
	let [ getHash, setHash ] = useState(hash)
	useEffect(()=> {
		console.log(hash)
		setHash(dev[0])
		return () => {
			console.log('finished')
		}
	},dev)
	return [getHash, getHash]
}