const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState={
  dialogsData:[
      {id: 1, name:'First User', avatar:"http://placehold.it/30"},
      {id: 2, name:'Second User', avatar:"http://placehold.it/30"},
      {id: 3, name:'Third User', avatar:"http://placehold.it/30"}
  ],
  messagesData:[
      {userId: 1, message:'First Message'},
      {userId: 2, message:'Second Message'},
      {userId: 3, message:'Third Message'}
  ],
  newMessageBody:''
} 

const dialogsReducer=(state=initialState,action)=>{
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody=''
            state.messagesData.push({userId: 6, message:body})
            return state
        default:
            return state
    }
}

export const sendMessageCreator=()=>{
    return{
      type:SEND_MESSAGE
    }
  }
  
export const updateNewMessageBodyCreator=(body)=>{
    return{
      type:UPDATE_NEW_MESSAGE_BODY,body:body
    }
  }

export default dialogsReducer