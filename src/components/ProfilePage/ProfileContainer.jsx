import * as axios from "axios";
import { connect } from 'react-redux'
import React from 'react'
import { setUserProfile} from '../../redux/profile-reducer'
import ProfilePage from './ProfilePage'

class ProfileContainer extends React.Component{

    componentDidMount(){
        axios.get(`http://localhost:3000/items/2`)
        .then(response=>{   
            this.props.setUserProfile(response.data);        
          }) 
    }

  render(){
      return(
            <ProfilePage {...this.props} profile={this.props.profile}/>
      )
  }
}

let mapStateToProps=(state)=>({
    profile:state.profilePage.profile
})



export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);