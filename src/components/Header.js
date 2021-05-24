import React from 'react'
import '../styles/Header.css'
import logo from '../logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import MicNoneIcon from '@material-ui/icons/MicNone';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
 import { Button } from '@material-ui/core'

const Header = () => {
	return (
		<>
			<header>
        <div className="header-left">
        <Button>
        <MenuIcon className="icon" />
        </Button>
            <img src={logo} alt="" className="logo" />
        </div>
        <div className="header-center">
            <input type="text" className="input-field" placeholder="Search" />
            <button className=" search-btn">Search</button>
            <MicNoneIcon className="icon" />
        </div>
        <div className="header-right">
        <AppsIcon className="icon" />
        <MoreVertOutlinedIcon className="icon" />
        <Button variant="outlined" color="primary" className="signin-btn">
        <AccountCircleOutlinedIcon className="icon" />
        Sign in
        </Button>
        </div>
    </header>
		</>
	)
}

export default Header