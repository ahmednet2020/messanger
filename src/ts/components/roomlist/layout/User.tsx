import * as React from 'react'
// import router link
import {  Link } from 'react-router-dom'
// import style file
import './User.scss'

const User = ({name, img, id, getHash}) => {
	return (
		<li>
			<Link to={{hash:id}} role="link" tabIndex={0}>
				<div className={`user ${getHash === id ? "active": false}`} id={id}>
					<div className="info">
						<div className="user-info">
							<span className="user-name">
								{name? name:"no name"}
							</span>
							<span className="user-time">
								<abbr title="2019-03-27">
									<time dateTime="2019-03-27"> 2019-03-27 </time>
								</abbr>
							</span>
						</div>
					</div>
					<div className="img-user">
						<img src={img} title="img" alt="img"/>
					</div>
				</div>
			</Link>
		</li>
	)
}

export default User;