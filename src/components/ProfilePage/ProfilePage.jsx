import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import classes from './ProfilePage.module.css'

const ProfilePage = ()=>{
    return(
      <div className={classes.app__content}>
        <div>
          <img src='https://sun9-32.userapi.com/impg/hd3duKApiU6H5qZe57Z-LLWGRlr8eKZx7TT6WA/pv6tgHvVSbc.jpg?size=2560x1920&quality=96&proxy=1&sign=a30bdb8ecbc75dcb8f48e3120714d173&type=album' alt=""/>
        </div>
        
        <div>
          ava+descr
        </div>

        <MyPosts/>
      </div>
    )
}

export default ProfilePage;