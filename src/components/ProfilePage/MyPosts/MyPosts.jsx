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

    let newPostElement = React.createRef();
    
    let addPost= ()=>{
      let text = newPostElement.current.value
      props.addPost(text)
      newPostElement.current.value=''
    }

    return(
        <div>
          My posts
          <div>     
            <div className={classes.subscribe}>
              <input  ref={newPostElement} className={classes.subscribe__input} type="text" name="name" placeholder="Напишите что-нибудь..."></input>
              <button className={classes.subscribe__btn} onClick={addPost} type="button">Отправить</button>
            </div>  
          </div>
          
          <div>
            {postElements}
          </div>
        </div>

    )
}

export default MyPosts;