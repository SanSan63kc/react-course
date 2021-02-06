import React from 'react'
import classes from './Frends.module.css'

let Frends =(props)=>{
    
        if (props.users.length==0){
        props.setUsers(
                [  
                    {id: 1, photoUrl: "http://placehold.it/50", followed: true, fullName:'Max Noskov', status:"I'm Yakor", location:{country:"Russia", city:"Nsk"}},
                    {id: 2, photoUrl: "http://placehold.it/50", followed: true, fullName:'Ilya Zinchev', status:"Moya Podpiska", location:{country:"Russia", city:"Nsk"}},
                    {id: 3, photoUrl: "http://placehold.it/50", followed: true, fullName:'Vova Menzhulin', status:"Gelert v klochya", location:{country:"Russia", city:"Nsk"}},
                    {id: 4, photoUrl: "http://placehold.it/50", followed: true, fullName:'Alexey Dovgal', status:"Bayern, sosat", location:{country:"Russia", city:"Nsk"}},
                    {id: 5, photoUrl: "http://placehold.it/50", followed: false, fullName:'Her s gory', status:"I'm musor", location:{country:"Russia", city:"mentovsk"}}
                ]
            )
        }   

    return <div>
        {
            props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={()=>{props.unfollow(u.id)}}>Подписан</button>
                        : <button onClick={()=>{props.follow(u.id)}}>Отписан</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Frends