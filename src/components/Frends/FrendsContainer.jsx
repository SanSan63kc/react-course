import React from 'react'
import { connect } from 'react-redux'
import { followAC, setUserAC, unfollowAC } from '../../redux/frends-reducer'
import Frends from './Frends'

let mapStateToProps=(state)=>{
    return{
        users:state.frendsPage.users
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUserAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Frends)