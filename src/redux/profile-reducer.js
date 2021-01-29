const ADD_POST='ADD-POST'
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'

let initialState={
  postsData:[
      {userId: 1, message:'It is my First post', likes:13, comments:12},
      {userId: 2, message:'It is my second post',likes:14, comments:8},
      {userId: 3, message:'It is my third post',likes:25, comments:17}
  ],
  newPostText:''
}

const profileReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_POST:
            let newPost={
                userId:4,
                message:state.newPostText,
                /* message:state.newPostText, */
                likes:13, 
                comments:12
            }
            state.postsData.push(newPost)
            state.newPostText=''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
    
    
}

export const addPostActionCreator=()=>{
    return{
      type:ADD_POST
    }
  }
  
export const updateNewPostTextActionCreator=(text)=>{
    return{
      type:UPDATE_NEW_POST_TEXT,newText:text
    }
  }

export default profileReducer