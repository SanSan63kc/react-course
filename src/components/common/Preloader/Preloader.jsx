import react from 'react'
import classes from "./Preloader.module.css";

let Preloader=(props)=>{
    return (
         <div className={classes.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
    {/* <img src={preloader}/> */}
   
}

export default Preloader