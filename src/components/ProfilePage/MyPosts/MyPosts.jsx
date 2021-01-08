import classes from './MyPosts.module.css';
import React from 'react'
import Post from './Post/Post';


const MyPosts = ()=>{
    return(
        <div>
          My posts
          <div>     
            <form className={classes.subscribe} action="/" method="post">
              <input className={classes.subscribe__input} type="email" name="name" placeholder="Введи какой-нибудь текст"></input>
              <button className={classes.subscribe__btn} type="submit">Отправить</button>
            </form>
            
          </div>

          <div>
            <Post message="Hi, how are you" likes="13" comment="14"/>
            <Post message="It's my first post" likes="12"comment="15"/>
          </div>
        </div>

    )
}

export default MyPosts;