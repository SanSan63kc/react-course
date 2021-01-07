import React from 'react'
import classes from './Header.module.css'

const Header = ()=>{
    return(
        <div className={classes.app__header}>
          <img src="http://www.kc-camapa.ru/img/logo/0.png" alt=""/>
          <div className={classes.header__text}>
            Тестовая соц сеть by Саша Александрович
          </div>
      </div>
    )
}

export default Header;