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

      let newPostElement = React.createRef();
    
      let addMessage= ()=>{
        let text = newPostElement.current.value
        alert(text)
      }

    return(

      <div className={classes.dialogs}>
        <div className={classes.user__list}>
          {dialogElements}
        </div> 

        <div className={classes.dialog__list}>
          {messagesElements} 
          {/* Начало редактируемой формы */}
          <form className={classes.addMess}>
              <input  ref={newPostElement} className={classes.addMess__input} type="text" name="name" placeholder="Напишите что-нибудь..."></input>
              <button className={classes.addMess__btn} onClick={addMessage} type="submit">Отправить</button>
          </form> 
          {/* Конец редактируемой формы */}
        </div>   
      </div>
    )
}

export default Dialogs;