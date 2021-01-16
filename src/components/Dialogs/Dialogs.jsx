import React from 'react'
import classes from './Dialogs.module.css'
import DialogUserLink from './DialogUserLink/DialogUserLink'
import DialogWithUser from './DialogWithUser/DialogWithUser'

const Dialogs = (props)=>{

  let dialogElements=props.state.dialogsData
    .map(d=>
      <DialogUserLink 
        name={d.name} 
        userId={d.id} 
        userAvatar={d.avatar}
      />
      )

  let messagesElements=props.state.messagesData
    .map(m=>
      <DialogWithUser 
        message={m.message}
      />
      )

    return(
      <div className={classes.dialogs}>
        <div className={classes.user__list}>
          {dialogElements}
        </div> 

        <div className={classes.dialog__list}>
          {messagesElements} 
        </div>   
      </div>
    )
}

export default Dialogs;