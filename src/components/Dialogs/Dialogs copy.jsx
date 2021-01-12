import React from 'react'
import classes from './Dialogs.module.css'

const Dialogs = ()=>{
    return(
      <div className={classes.dialogs}>
        <div className={classes.user__list}>
          <div className={classes.user__item + ' '+ classes.activeDialog}>
            First User
          </div>
          <div className={classes.user__item}>
            Second User
          </div>
          <div className={classes.user__item}>
            Third User
          </div>
          <div className={classes.user__item}>
            One more User
          </div>
        </div> 

         <div className={classes.message__list}>
          <div className={classes.message__item}>Message 1</div>
          <div className={classes.message__item}>Message 2</div>
          <div className={classes.message__item}>Message 3</div>
          <div className={classes.message__item}>Message 4</div>
          <div className={classes.message__item}>Message 5</div>

          <div className={classes.message__item}>Message 1</div>
          <div className={classes.message__item}>Message 2</div>
          <div className={classes.message__item}>Message 3</div>
          <div className={classes.message__item}>Message 4</div>
          <div className={classes.message__item}>Message 5</div>
          <div className={classes.message__item}>Message 1</div>
          <div className={classes.message__item}>Message 2</div>
          <div className={classes.message__item}>Message 3</div>
          <div className={classes.message__item}>Message 4</div>
          <div className={classes.message__item}>Message 5</div>
          <div className={classes.message__item}>Message 1</div>
          <div className={classes.message__item}>Message 2</div>
          <div className={classes.message__item}>Message 3</div>
          <div className={classes.message__item}>Message 4</div>
          <div className={classes.message__item}>Message 5</div>
          <div className={classes.message__item}>Message 1</div>
          <div className={classes.message__item}>Message 2</div>
          <div className={classes.message__item}>Message 3</div>
          <div className={classes.message__item}>Message 4</div>
          <div className={classes.message__item}>Message 5</div>
          <div className={classes.message__item}>Message 1</div>
          <div className={classes.message__item}>Message 2</div>
          <div className={classes.message__item}>Message 3</div>
          <div className={classes.message__item}>Message 4</div>
          <div className={classes.message__item}>Message 5</div>
          <div className={classes.message__item}>Message 1</div>
          <div className={classes.message__item}>Message 2</div>
          <div className={classes.message__item}>Message 3</div>
          <div className={classes.message__item}>Message 4</div>
          <div className={classes.message__item}>Message 5</div>
      </div>
      </div>
    )
}

export default Dialogs;