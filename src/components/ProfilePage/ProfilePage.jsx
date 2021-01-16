import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import classes from './ProfilePage.module.css'

const ProfilePage = (props)=>{
  

  return(
      <div >
        <ProfileInfo/>
        <MyPosts postsData={props.state.postsData}/>
      </div>
    )
}

export default ProfilePage;