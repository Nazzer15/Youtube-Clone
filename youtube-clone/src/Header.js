import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FaceIcon from '@material-ui/icons/Face';

import YTlogo from './images/YouTube-Logo.png';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon className="menu"/>
                <img className="header_logo" src={YTlogo} alt="Youtube Logo" />
            </div>

            <div className="header_input">
                <input type="text" placeholder="Search"/>
                <SearchIcon className="search"/>
            </div>

            <div className="header_icons">
                <VideoCallIcon className="header_icons" />
                <AppsIcon className="header_icons"/>
                <NotificationsIcon className="header_icons"/>
                <FaceIcon alt="Profile picture" />
            </div>



        </div>

    )
}

export default Header
