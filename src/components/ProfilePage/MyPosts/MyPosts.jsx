import classes from './MyPosts.module.css';
import React from 'react'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props)=>{

  const AddNewPostForm=(props)=>{
    return(
      <form onSubmit={props.handleSubmit}>     
        <div className={classes.createPost}>
          <Field className={classes.createPost__input} name="newPostText" component="textarea"/>
          <button 
            className={classes.createPost__btn} 
           >Отправить</button>
        </div>  
      </form>
    )
  }
  
  const AddNewPostFormRedux=reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)

  let postElements=props.posts.map(
    pd=><Post message={pd.message} likes={pd.likes} comment={pd.comments}/>
  )

    let newPostElement = React.createRef();
    
    let onAddPost= (values)=>{
      props.addPost(values.newPostText)  
    }

    return(
        <div>
          My posts     
          <AddNewPostFormRedux onSubmit={onAddPost}/>
          <div>
            {postElements}
          </div>
        </div>

    )
}

export default MyPosts;