import React from 'react'
import { Redirect } from 'react-router-dom'
import classes from './Dialogs.module.css'
import DialogUserLink from './DialogUserLink/DialogUserLink'
import DialogWithUser from './DialogWithUser/DialogWithUser'
import {Field, reduxForm} from 'redux-form'
import { Textarea } from '../common/FormsControl/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'

const maxLength=maxLengthCreator(50)

const Dialogs = (props)=>{

  let state=props.dialogsPage;

  let dialogElements=state.dialogsData
    .map(d=>
      <DialogUserLink 
        name={d.name} 
        userId={d.id} 
        key={d.id}
        userAvatar={d.avatar}
      />
      )

  let messagesElements=state.messagesData
    .map(m=>
      <DialogWithUser 
        message={m.message}
        key={m.id}
      />
  )

  let newMessageBody=state.newMessageBody

  let addNewMessage=(values)=>{
    props.sendMessage(values.newMessageBody)
  }
  /* Проверка на залогиненность */
  if (!props.isAuth) return <Redirect to={"/login"}/>

  return(
      <div className={classes.dialogs}>
        <div className={classes.user__list}>
          {dialogElements}
        </div> 

        <div className={classes.dialog__list}>
          {messagesElements}

          <div className={classes.addMess}>
          <AddMessageFormRedux onSubmit={addNewMessage}/>
          </div>  
        </div>   
      </div>
    )
}



const AddMessageForm=(props)=>{
  return (<form onSubmit={props.handleSubmit}>
            <div className={classes.addMess}>
              <Field component={Textarea} name="newMessageBody" placeholder='Напишите сообщение' className={classes.addMess__input}
              validate={[required, maxLength]} placeholder="введите сообщение"/>
              <button className={classes.addMess__btn}>Отправить</button>
            </div>          
          </form>
  )
}

const AddMessageFormRedux=reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;