import React from 'react'
import Frends from './Frends';
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage,toggleFollowingProgress,getUsers} from '../../redux/frends-reducer'
import Preloader from '../common/Preloader/Preloader';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class FrendsContainer extends React.Component{

    componentDidMount(){
        this.props.getUsers(this.props.currentpage, this.props.pageSize)
    }
  
    onPageChanged=(pageNumber)=>{
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
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
                      toggleFollowingProgress={this.props.toggleFollowingProgress}
                      followingInProgress={this.props.followingInProgress}  
                      isAuth={this.props.isAuth}           
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
        isFetching:state.frendsPage.isFetching,
        followingInProgress:state.frendsPage.followingInProgress,
        isAuth:state.auth.isAuth
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleFollowingProgress,getUsers})
)
(FrendsContainer)