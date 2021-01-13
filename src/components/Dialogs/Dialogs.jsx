import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom"

let  TempUserAvatar = "http://placehold.it/30"

const DialogUserLink=(props)=>{

  let urlPath="/dialogs/"+props.userId
  
  return(
    <NavLink className={classes.user__link} to={urlPath} >
      <div className={classes.user__item}>
        <div className={classes.user__avatar}>
          <img src={props.userAvatar} alt=""/>
        </div>
        <div className={classes.user__name}>
            {props.name}    
        </div>
      </div> 
    </NavLink>
  )
}

const DialogWithUser=(props)=>{
  return(
    <div className={classes.dialog__item}>
      <div className={classes.dialog__text}>{props.message}</div>
    </div>
  )
}

const Dialogs = (props)=>{

  let dialogsData=[
    {id: 1, name:'First User', avatar:TempUserAvatar},
    {id: 2, name:'Second User', avatar:TempUserAvatar},
    {id: 3, name:'Third User', avatar:TempUserAvatar}
  ]

  let messagesData=[
    {userId: 1, message:'First Message'},
    {userId: 2, message:'Second Message'},
    {userId: 3, message:'Third Message'}
  ]

  let dialogElements=dialogsData
    .map(d=>
      <DialogUserLink 
        name={d.name} 
        userId={d.id} 
        userAvatar={d.avatar}
      />
      )

  let messagesElements=messagesData
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