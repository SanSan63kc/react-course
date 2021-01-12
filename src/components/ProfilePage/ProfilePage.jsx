import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import classes from './ProfilePage.module.css'

const ProfilePage = ()=>{
    return(
      <div >
        <ProfileInfo/>
        <MyPosts/>

      </div>
    )
}

export default ProfilePage;