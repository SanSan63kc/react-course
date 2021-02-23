import React from 'react'
import classes from "./Frends.module.css";
import {NavLink} from "react-router-dom" 
import * as axios from "axios";

let Frends =(props)=>{
    
    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize)

    let pages=[]

    for (let i=1; i<=pagesCount; i++){
      pages.push(i)
    }
    
    return <div>
    <div className={classes.frendsPage}>
                <div className={classes.usersList}>
                <div>
                    {pages.map(p=>{
                        return <span className={props.currentPage===p && classes.selectedPage}
                                    onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>})}
                </div>
                {props.users.map((u) => (
                    <div className={classes.userCard} key={u.id}>
                    <div className={classes.userAvatar}>
                        <NavLink to={'/profile/'+u.id}>
                            <img className={classes.userAvatarPhoto} src={u.photos.small !=null ? u.photos.small:"https://vk.com/images/camera_200.png" } />  {/* src={u.photoUrl} //-  так в моём json лежит */} {/* src={u.photos.small !=null ? u.photos.small:"https://vk.com/images/camera_200.png" } */}
                        </NavLink>
                    </div>
                    <div className={classes.userInfo__block}>
                        <div className={classes.fullName}>{u.name}</div>{/* в моём json лежит u.fullName */}
                        <div className={classes.workedIn__text}>{u.workedIn}</div>
                        <div className={classes.locationName}>
                        {"u.location.country + ", " + u.location.city"}
                        </div>
                    </div>
                    <div className={classes.follow__block}>
                        {u.followed ? (
                        <button className={classes.follow__btn} onClick={() => {   
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                withCredentials:true,
                                headers:{
                                    "API-KEY":"17d930c6-7812-4054-9716-5b2f0f483c4a"
                                }
                            })
                            .then(response=>{   
                                if (response.data.resultCode==0){
                                    props.unfollow(u.id)
                                }
                            })                         
                            }} >
                            Подписан
                        </button>
                        ) : (
                        <button className={classes.follow__btn} onClick={() => {                           
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                withCredentials:true,
                                headers:{
                                    "API-KEY":"17d930c6-7812-4054-9716-5b2f0f483c4a"
                                }})
                            .then(response=>{   
                                if (response.data.resultCode==0){
                                    props.follow(u.id)
                                }
                            })                      
                            }} >
                            Отписан
                        </button>
                        )}
                    </div>
                    </div>
                ))}
                </div>
                <div className={classes.rightPanel}>
                <div className={classes.firstPanel}>Там, где куча всяких параметров по поиску друзей</div>
                <div className={classes.secondPanel}>Там, где возможные друзья</div>
                </div>
  </div>
  </div>
}

export default Frends