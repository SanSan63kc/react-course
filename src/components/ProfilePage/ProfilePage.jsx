import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const ProfilePage = (props)=>{
  

  return(
      <div >
        <ProfileInfo/>
        <MyPostsContainer/>
      </div>
    )
}

export default ProfilePage;