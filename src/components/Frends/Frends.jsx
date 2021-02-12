import React from "react";
import classes from "./Frends.module.css";
import * as axios from "axios";

class Frends extends React.Component{

  constructor(props){
    super(props)

      /* axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
        props.setUsers(response.data.items); -- пример*/
      axios.get("http://localhost:3000/items").then(response=>{
        this.props.setUsers(response.data);
      }) 
  }

  render(){
    return (
      <div className={classes.frendsPage}>
        <div className={classes.usersList}>
          {this.props.users.map((u) => (
            <div className={classes.userCard} key={u.id}>
              <div className={classes.userAvatar}>
                <img className={classes.userAvatarPhoto} src={u.photoUrl} />  {/* src={u.photoUrl} //-  так в моём json лежит */} {/* src={u.photos.small !=null ? u.photos.small:"https://vk.com/images/camera_200.png" } */}
              </div>
              <div className={classes.userInfo__block}>
                <div className={classes.fullName}>{u.fullName}</div>{/* в моём json лежит u.fullName */}
                <div className={classes.workedIn__text}>{u.workedIn}</div>
                <div className={classes.locationName}>
                  {u.location.country + ", " + u.location.city}
                </div>
              </div>
              <div className={classes.follow__block}>
                {u.followed ? (
                  <button
                    className={classes.follow__btn}
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Подписан
                  </button>
                ) : (
                  <button
                    className={classes.follow__btn}
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
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
    );
  }
}

export default Frends;
