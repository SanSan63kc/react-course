import React from 'react'

const Navbar = ()=>{
    return(
      <nav className="app-nav">
        <div className="navbar__item">
          <a>Profile</a>
        </div>
        <div className="navbar__item">
          <a>Messages</a>
        </div>
        <div className="navbar__item">
          <a>News</a>
        </div>
        <div className="navbar__item">
          <a>Music</a>
        </div>
        <div>
          <a className="navbar__item">Settings</a>
        </div>
      </nav>
    )
}

export default Navbar;