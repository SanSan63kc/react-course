import React from 'react'
import classes from './Post.module.css'

let myAva = 'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/e35/67585491_374854409894931_5025627006207279517_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=w6L76-RtuAwAX-swHhY&tp=1&oh=329be9843f117672f425d6ca6ce3d154&oe=60220630'

const Post = ()=>{
    return(
            <div className={classes.post__item}>
              <img className={classes.post__avatar} src={myAva} href="#" alt=""/>
              <div className={classes.post__text}>post1</div>
            </div>
        )
}

export default Post;