import React from 'react'
import classes from './Navbar.module.css'

const Navbar = ()=>{
    return(
      <nav className={classes.page__navbar}>
        <div className={classes.navbar__item}>
          Profile
        </div>
        <div className={classes.navbar__item}>
          <a>Messages</a>
        </div>
        <div className={classes.navbar__item}>
          <a>News</a>
        </div>
        <div className={classes.navbar__item}>
          <a>Music</a>
        </div>
        <div>
          <a className={classes.navbar__item}>Settings</a>
        </div>
      </nav>
    )
}

export default Navbar;