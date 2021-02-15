import React from 'react'
import * as axios from "axios";
import Frends from './Frends';
import { connect } from 'react-redux'
import { followAC, setUserAC, unfollowAC, setCurrentPageAC,setTotalUsersCountAC,toggleIsFetchingAC} from '../../redux/frends-reducer'
import preloader from '../../assets/images/loader.png'
import Preloader from '../common/Preloader/Preloader';

class FrendsContainer extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true)
        /* axios.get('https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).then(response=>{
          this.props.setUsers(response.data.items); -- пример*/
        axios.get(`http://localhost:3000/items?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response=>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data);        
            /* this.props.setTotalUsersCount(response.data.totalCount)  - примерно так должен получать переменную totalCount из запроса*/
            /* пока захардкодил так */
            let totalCount
            totalCount = 20
            this.props.setTotalUsersCount(totalCount) 
          }) 
    }
  
    onPageChanged=(pageNumber)=>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`http://localhost:3000/items?page=${pageNumber}&count=${this.props.pageSize}`)
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
}

export default connect(mapStateToProps, mapDispatchToProps)(FrendsContainer)