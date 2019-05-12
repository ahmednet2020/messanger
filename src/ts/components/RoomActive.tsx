import * as React from 'react'
// import connect for store
import { connect } from 'react-redux'
import { withRouter } from "react-router";
// import components
import ChatRoom from './room/ChatRoom'
import RoomSetting from './room/RoomSetting'
import RoomActiveHead from './room/RoomActiveHead'
// import style file
import './RoomActive.scss'
const RoomActive = ({location,message}) => {
	return (
		<div className="RoomActive">
			<div className="row">
				<div className="col-12">
					<RoomActiveHead name={location.state?location.state.name:null}/>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-4 col-lg-4">
					<RoomSetting/>
				</div>
				<div className="col-12 col-md-8 col-lg-8">
					<ChatRoom message={message}/>
				</div>
			</div>
		</div>
	)
}
// redux functions
const mapStateToProps = (state) => {
	return {
		message:state.getMessage
	}
}
const mapActionToProps = (dispatch:any) => {
  return {
  }
}
export default withRouter(connect(mapStateToProps,mapActionToProps)(RoomActive));