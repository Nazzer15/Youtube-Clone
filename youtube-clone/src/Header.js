import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'

function Header() {
    return (
        <div>
            <h1>I'm a header 🎢 🚀</h1>
            <MenuIcon />
            <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="Youtube Logo" />
            <input type="text" />
            <SearchIcon />
        </div>

    )
}

export default Header
