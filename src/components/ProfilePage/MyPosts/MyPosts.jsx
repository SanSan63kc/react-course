import classes from './MyPosts.module.css';
import React from 'react'
import Post from './Post/Post';


const MyPosts = (props)=>{
/* 
  let postsData=[
    {userId: 1, message:'It is my First post', likes:13, comments:12},
    {userId: 2, message:'It is my second post',likes:14, comments:8},
    {userId: 3, message:'It is my thirdt post',likes:25, comments:17}
  ]
 */
  let postElements=props.postsData.map(
    pd=><Post message={pd.message} likes={pd.likes} comment={pd.comments}/>
  )

    return(
        <div>
          My posts
          <div>     
            <form className={classes.subscribe} action="/" method="post">
              <input className={classes.subscribe__input} type="text" name="name" placeholder="Напишите что-нибудь..."></input>
              <button className={classes.subscribe__btn} type="submit">Отправить</button>
            </form>  
          </div>
          
          <div>
            {postElements}
          </div>
        </div>

    )
}

export default MyPosts;