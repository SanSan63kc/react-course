import * as axios from "axios";
import { connect } from 'react-redux'
import React from 'react'
import { getUserProfile} from '../../redux/profile-reducer'
import ProfilePage from './ProfilePage'
import { Redirect, withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId=this.props.match.params.userId

        if(!userId){
            userId=2
        }
        this.props.getUserProfile(userId)
    }

  render(){
  
      return(
            <ProfilePage {...this.props} profile={this.props.profile}/>
      )
  }
}

let AuthRedirectComponent=WithAuthRedirect(ProfileContainer)

let mapStateToProps=(state)=>({
    profile:state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent);