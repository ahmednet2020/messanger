import { useState, useEffect } from 'react'

export default (text:string, dev?:any[]) => {
	let [ getText, setText ] = useState(text)
	useEffect(()=> {
		console.log(getText);
		return () => {
			console.log('finished')
		}
	},dev)
	return [getText, setText]
}