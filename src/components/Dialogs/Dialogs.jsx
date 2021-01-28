import React from 'react'
import classes from './Dialogs.module.css'
import DialogUserLink from './DialogUserLink/DialogUserLink'
import DialogWithUser from './DialogWithUser/DialogWithUser'
import {updateNewMessageBodyCreator,sendMessageCreator} from "../../redux/dialogs-reducer"

const Dialogs = (props)=>{

  let state=props.store.getState().dialogsPage;

  let dialogElements=state.dialogsData
    .map(d=>
      <DialogUserLink 
        name={d.name} 
        userId={d.id} 
        userAvatar={d.avatar}
      />
      )

  let messagesElements=state.messagesData
    .map(m=>
      <DialogWithUser 
        message={m.message}
      />
  )

  let newMessageBody=state.newMessageBody

  let onSendMessageClick=()=>{
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChange=(e)=>{
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return(
      <div className={classes.dialogs}>
        <div className={classes.user__list}>
          {dialogElements}
        </div> 

        <div className={classes.dialog__list}>
          {messagesElements}

          <div className={classes.addMess}>
              <textarea
                className={classes.addMess__input} 
                value={newMessageBody} 
                onChange={onNewMessageChange}
                placeholder='Напишите сообщение'
              >
              </textarea>
              <button 
                className={classes.addMess__btn}
                onClick={onSendMessageClick} 
                type="button">
                  Отправить
              </button>
          </div>  
        </div>   
      </div>
    )
}

export default Dialogs;