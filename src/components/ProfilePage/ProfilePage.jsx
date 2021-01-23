import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import classes from './ProfilePage.module.css'

const ProfilePage = (props)=>{
  

  return(
      <div >
        <ProfileInfo/>
        <MyPosts 
          postsData={props.profilePage.postsData}
          updateNewPostText={props.updateNewPostText}
          newPostText={props.profilePage.newPostText}
          addPost={props.addPost}/>
      </div>
    )
}

export default ProfilePage;