import React from 'react'
import SideBarOption from './SideBarOption'
import '../styles/SideBar.css'
import HomeOutlinedIcon from '@material-ui/icons/Home';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SportsBaseballOutlinedIcon from '@material-ui/icons/SportsBaseballOutlined';
import GamepadOutlinedIcon from '@material-ui/icons/GamepadOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';

const SideBar = () => {
	return (
		<>
			<div className="side-bar">
				<SideBarOption name="Home" Icon={HomeOutlinedIcon} />
				<SideBarOption name="Explore" Icon={ExploreOutlinedIcon} />
				<SideBarOption name="Subscriptuon" Icon={SubscriptionsOutlinedIcon} />
				<hr />
				<SideBarOption name="Libary" Icon={VideoLibraryOutlinedIcon} />
				<SideBarOption name="History" Icon={HistoryOutlinedIcon} />
				<hr />
				<SideBarOption name="Music" Icon={PlayCircleOutlineOutlinedIcon} />
				<SideBarOption name="Sports" Icon={SportsBaseballOutlinedIcon} />
				<SideBarOption name="Gaming" Icon={GamepadOutlinedIcon} />
				<SideBarOption name="News" Icon={ReceiptOutlinedIcon} />
				<hr />
				<SideBarOption name="Browse channels" Icon={ControlPointOutlinedIcon} />
				<hr />
			</div>
		</>
	)
}

export default SideBar