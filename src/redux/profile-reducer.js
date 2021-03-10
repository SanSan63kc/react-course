import { profileAPI, usersAPI } from "../api/api"

const ADD_POST='ADD-POST'
const SET_USER_PROFILE='SET-USER-PROFILE'
const SET_STATUS='SET-STATUS'

let initialState={
  postsData:[
      {userId: 1, message:'It is my First post', likes:13, comments:12},
      {userId: 2, message:'It is my second post',likes:14, comments:8},
      {userId: 3, message:'It is my third post',likes:25, comments:17}
  ],
  profile:null,
  status:""
}

const profileReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_POST:{
            let newPost={
                userId:4,
                message:action.newPostText,
                /* message:state.newPostText, */
                likes:13, 
                comments:12
            }
            return {
              ...state,
              postsData:[...state.postsData,newPost],
              newPostText:''
            }
          }
        case SET_STATUS:{
          return{
            ...state,
           status:action.status
          }
      }
        case SET_USER_PROFILE:{
          return{
            ...state,
            profile:action.profile
          }
      }
        default:
            return state
    } 
}

export const addPostActionCreator=(newPostText)=>{
    return{
      type:ADD_POST,newPostText
    }
  }

  export const setUserProfile=(profile)=>{
    return{
      type:SET_USER_PROFILE,profile
    }
  }

  export const setStatus=(status)=>{
    return{
      type:SET_STATUS,status
    }
  }

  /* Thunk Creator */

  export const getUserProfile=(userId)=>(dispatch)=>{
    usersAPI.getProfile(userId).then(response=>{   
      dispatch(setUserProfile(response.data));        
    })
  }

  export const getStatus=(userId)=>(dispatch)=>{
    profileAPI.getStatus(userId)
    .then(response=>{  
      dispatch(setStatus(response.data));        
    })
  }

  export const updateStatus=(status)=>(dispatch)=>{
    profileAPI.updateStatus(status)
    .then(response=>{  
      /* if (response.data.resultCode===1){
         
      }  */
      dispatch(setStatus(status));           
    })
  }

export default profileReducer