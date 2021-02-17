import React from 'react'
import * as axios from "axios";
import Frends from './Frends';
import { connect } from 'react-redux'
import { follow, setUsers, unfollow, setCurrentPage,setTotalUsersCount,toggleIsFetching} from '../../redux/frends-reducer'
import Preloader from '../common/Preloader/Preloader';

class FrendsContainer extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true)
        /* axios.get('https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).then(response=>{
          this.props.setUsers(response.data.items); -- пример*/
        axios.get(`http://localhost:3001/items?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response=>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data);        
            /* this.props.setTotalUsersCount(response.data.totalCount)  - примерно так должен получать переменную totalCount из запроса*/
            /* пока захардкодил так */
            let totalCount
            totalCount = 5
            this.props.setTotalUsersCount(totalCount) 
          }) 
    }
  
    onPageChanged=(pageNumber)=>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`http://localhost:3001/items?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response=>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data);
            })
    }
  
    render(){
      return <>
      {this.props.isFetching ?<Preloader/>:null}
      <Frends totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
             />
             </>
    }
  }

let mapStateToProps=(state)=>{
    return{
        users:state.frendsPage.users,
        pageSize:state.frendsPage.pageSize,
        totalUsersCount:state.frendsPage.totalUsersCount,
        currentPage:state.frendsPage.currentPage,
        isFetching:state.frendsPage.isFetching
    }
}

/* Оставил этот код для понимания того, что заменил в connect */
/* let mapDispatchToProps=(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUserAC(users))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching:(isFetching)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
} */

export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(FrendsContainer)