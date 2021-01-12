import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom"

let  TempUserAvatar = "http://placehold.it/30"

const DialogUserLink=(props)=>{

  let urlPath="/dialogs/"+props.userId
  
  return(
    <NavLink className={classes.user__link}to={urlPath} >
      <div className={classes.user__item}>
        <div className={classes.user__avatar}>
          <img src={props.userAvatar}/>
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

const Dialogs = ()=>{
    return(
      <div className={classes.dialogs}>
        <div className={classes.user__list}>
          <DialogUserLink name="First User" userId="1" userAvatar={TempUserAvatar}/>
          <DialogUserLink name="Second User" userId="2" userAvatar={TempUserAvatar}/>
          <DialogUserLink name="Third User" userId="3" userAvatar={TempUserAvatar}/>
        </div> 

        <div className={classes.dialog__list}>
          <DialogWithUser message="First message"/>
          <DialogWithUser message="Second message"/>
          <DialogWithUser message="Third message"/> 
        </div>   
      </div>
    )
}

export default Dialogs;