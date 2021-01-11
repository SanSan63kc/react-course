import React from 'react'
import classes from './Dialogs.module.css'

const Dialogs = ()=>{
    return(
      <div className={classes.dialogs}>
        <div className={classes.dialog__item}>
          <div className={classes.item}>
            First User
          </div>
          <div className={classes.item}>
            Second User
          </div>
          <div className={classes.item}>
            Third User
          </div>
        </div>

        <div className={classes.messages}>
          <div className={classes.message}>1</div>
          <div className={classes.message}>2</div>
          <div className={classes.message}>3</div>
        </div>
      </div>
    )
}

export default Dialogs;