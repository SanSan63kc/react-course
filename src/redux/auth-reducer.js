import { authAPI } from "../api/api"

const SET_USER_DATA='SET-USER-DATA'

let initialState={
  userId: null,
  email:null,
  login:null,
  isAuth:false,
  isFetching:false
}

const authReducer=(state=initialState,action)=>{
    switch(action.type){
      
      case SET_USER_DATA:{
        return {
          ...state,
          ...action.payload
        }
      }

      default:
        return state
    } 
}
/* Action Creator */
export const setAuthUserData=(userId, email, login, isAuth)=>{
    return{type:SET_USER_DATA,payload:{userId, email, login, isAuth}}
}

/* Thunk Creator */
export const getAuthUserData=()=>(dispatch)=>{
  authAPI.me()
    .then(response=>{   
            /* if (response.data.resultCode===1){
              let{id,login,email}=response.data.data
              dispatch(setAuthUserData(id, email, login, true))
            } */
            let{id,login,email}=response.data.data
            dispatch(setAuthUserData(id, email, login, true))
          }) 
}

/* Thunk */
export const login=(email,password,rememberMe)=>(dispatch)=>{
  authAPI.login(email,password,rememberMe)
    .then(response=>{   
            /* if (response.data.resultCode===1){
              dispatch(getAuthUserData())
            } */
            dispatch(getAuthUserData())
          }) 
}
 
/* Thunk Creator */
export const logout=()=>(dispatch)=>{
  authAPI.logout()
    .then(response=>{   
            /* if (response.data.resultCode===1){
              dispatch(setAuthUserData(null, null , null, false))
            } */
            dispatch(setAuthUserData(null, null , null, false))
          }) 
}

export default authReducer